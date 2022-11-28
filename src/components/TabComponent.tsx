import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, Text, ScrollView} from 'react-native';
import {useCallback} from 'react';
import NewCardComponent from './NewCardComponent';
import axios from 'axios';
import Card from './Card';
import {ContentType} from '../../types';

const TabComponent = ({navigation, route}: any) => {
  const [contents, setContents] = useState<ContentType[]>([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const queryIdx =
    route.params.name === 'opinion'
      ? 1
      : route.params.name === 'youtube'
      ? 2
      : 3;

  const newArrivalContent = useMemo(() => {
    if (contents.length) {
      const temp = contents.filter(v => v.like_top === 1);
      return temp;
    }
    return [];
  }, [contents]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://test.daground.io/info/contents?sector=${queryIdx}`,
          {
            headers: {
              'test-auth': 'sandbankfrontend',
            },
          },
        );
        setContents(response.data.content);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [queryIdx]);

  const onPressShowMore = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ScrollView>
      {newArrivalContent.length ? (
        <NewCardComponent data={newArrivalContent} />
      ) : null}
      {contents.slice(0, count * 5).map((item: ContentType) => {
        return <Card key={item.id} item={item} navigation={navigation} />;
      })}
      {/*TODO: length 넘으면 안보이도록 조건부 렌더링 */}
      {contents.length <= count * 5 ? null : (
        <Pressable onPress={onPressShowMore}>
          <Text>더보기</Text>
        </Pressable>
      )}
    </ScrollView>
  );
};

export default TabComponent;
