import React, {useEffect, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import CardButtons from './CardButtons';
import ShowMoreComponent from './ShowMoreComponent';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {TabStackParamList} from './TabComponent';

const YoutubeTabDetail = () => {
  const route = useRoute<RouteProp<TabStackParamList, 'YoutubeTabDetail'>>();

  const content = useSelector(
    (state: RootState) => state.contents.youtubeContents,
  );
  const navigation = useNavigation<NavigationProp<TabStackParamList>>();

  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, []);

  const currentContent = content.filter(v => v.id === route.params.id);
  const anotherContent = content.filter(v => v.id !== route.params.id);
  const playerRef = useRef<YoutubeIframeRef>(null);

  return (
    <ScrollView>
      <View style={{marginBottom: 20, backgroundColor: 'white'}}>
        <YoutubePlayer
          ref={playerRef}
          height={200}
          videoId={currentContent[0].link}
        />
        <View
          style={{
            backgroundColor: '#F8F5F9',
            marginVertical: 10,
            padding: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            {currentContent[0].title}
          </Text>
        </View>
        <Text style={{color: 'black'}}>{currentContent[0].body}</Text>
        <View
          style={{alignItems: 'center', justifyContent: 'center', margin: 30}}>
          <CardButtons item={currentContent[0]} />
        </View>
      </View>
      <ShowMoreComponent contents={anotherContent} topic={'영상'} />
    </ScrollView>
  );
};

export default YoutubeTabDetail;
