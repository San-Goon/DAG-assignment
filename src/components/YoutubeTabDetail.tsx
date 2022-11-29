import React, {useCallback, useRef, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import CardButtons from './CardButtons';
import Card from './Card';

const YoutubeTabDetail = ({route}: any) => {
  const [count, setCount] = useState(1);
  const content = useSelector(
    (state: RootState) => state.contents.youtubeContents,
  );
  const currentContent = content.filter(v => v.id === route.params.id);
  const anotherContent = content.filter(v => v.id !== route.params.id);
  const playerRef = useRef<YoutubeIframeRef>(null);

  const onPressShowMore = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

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
      <View style={{backgroundColor: 'white', padding: 20, margin: 10}}>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
          더 많은 영상을 확인해보세요.
        </Text>
        {anotherContent.slice(0, count * 5).map(v => {
          return <Card item={v} key={v.id} />;
        })}
        {count * 5 >= anotherContent.length ? null : (
          <Pressable
            onPress={onPressShowMore}
            style={{
              backgroundColor: '#F1F5FE',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 20,
              margin: 20,
            }}>
            <Text style={{color: '#7D9FEC', fontWeight: 'bold', fontSize: 16}}>
              더보기
            </Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

export default YoutubeTabDetail;
