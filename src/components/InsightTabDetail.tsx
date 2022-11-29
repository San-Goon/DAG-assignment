import React, {useCallback} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import CardButtons from './CardButtons';
import {useNavigation} from '@react-navigation/native';
import ShowMoreComponent from './ShowMoreComponent';

const InsightTabDetail = ({route}: any) => {
  const navigation = useNavigation<any>();

  const content = useSelector(
    (state: RootState) => state.contents.insightContents,
  );
  const currentContent = content.filter(v => v.id === route.params.id);
  const anotherContent = content.filter(v => v.id !== route.params.id);

  const onPressDetail = useCallback(() => {
    navigation.navigate('WebviewComponent', {link: currentContent[0].link});
  }, [currentContent, navigation]);

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#F8F5F9',
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
        <Image
          style={{width: '100%', marginVertical: 20}}
          source={{uri: currentContent[0].image, height: 200}}
          resizeMode="contain"
        />
        <Text style={{color: 'black', marginHorizontal: 20}}>
          {currentContent[0].body}
        </Text>
        <View
          style={{alignItems: 'center', justifyContent: 'center', margin: 30}}>
          <Pressable
            onPress={onPressDetail}
            style={{
              backgroundColor: '#F1F5FE',
              alignItems: 'center',
              paddingVertical: 5,
              borderRadius: 20,
              margin: 20,
              width: 150,
            }}>
            <Text style={{color: '#7D9FEC', fontWeight: 'bold', fontSize: 16}}>
              전체 리포트 읽기
            </Text>
          </Pressable>
          <CardButtons item={currentContent[0]} />
        </View>
      </View>
      <ShowMoreComponent contents={anotherContent} topic={'리포트'} />
    </ScrollView>
  );
};

export default InsightTabDetail;
