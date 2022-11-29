import React, {useCallback, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import CardButtons from './CardButtons';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';

const InsightTabDetail = ({route}: any) => {
  const [count, setCount] = useState(1);
  const navigation = useNavigation<any>();

  const content = useSelector(
    (state: RootState) => state.contents.insightContents,
  );
  const currentContent = content.filter(v => v.id === route.params.id);
  const anotherContent = content.filter(v => v.id !== route.params.id);

  const onPressShowMore = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const onPressDetail = useCallback(() => {
    navigation.navigate('NormalTabDetail', {link: currentContent[0].link});
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
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
          더 많은 리포트를 확인해보세요.
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

export default InsightTabDetail;
