import React, {useEffect, useState} from 'react';
import {Pressable, Text, ScrollView} from 'react-native';
import {useCallback} from 'react';
import NewCardComponent from './NewCardComponent';
import axios from 'axios';
import Card from './Card';

const CardComponent = ({navigation, route}: any) => {
  const [contents, setContents] = useState<any>([]);
  const [count, setCount] = useState(1);
  const queryIdx =
    route.params.name === 'opinion'
      ? 1
      : route.params.name === 'youtube'
      ? 2
      : 3;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://test.daground.io/info/contents?sector=${queryIdx}`,
        {
          headers: {
            'test-auth': 'sandbankfrontend',
          },
        },
      );
      setContents(response.data.content);
    };
    getData();
  }, [queryIdx]);

  const onPressShowMore = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <ScrollView>
      {/*<NewCardComponent />*/}
      {contents.slice(0, count * 5).map((item: any) => {
        return <Card item={item} navigation={navigation} />;
      })}
      {/*TODO: length 넘으면 안보이도록 조건부 렌더링 */}
      <Pressable onPress={onPressShowMore}>
        <Text>더보기</Text>
      </Pressable>
    </ScrollView>
  );
};

export default CardComponent;
