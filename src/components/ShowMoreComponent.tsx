import React, {useCallback, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Card from './Card';
import {ContentType} from '../../types';

interface PropsType {
  contents: ContentType[];
  topic: string;
}

const ShowMoreComponent = ({contents, topic}: PropsType) => {
  const [count, setCount] = useState(1);
  const onPressShowMore = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
        더 많은 {topic}를 확인해보세요.
      </Text>
      {contents.slice(0, count * 5).map(v => {
        return <Card item={v} key={v.id} />;
      })}
      {count * 5 >= contents.length ? null : (
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
  );
};

export default ShowMoreComponent;
