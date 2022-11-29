import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, Text, ScrollView, View} from 'react-native';
import {useCallback} from 'react';
import NewCardComponent from './NewCardComponent';
import axios from 'axios';
import Card from './Card';
import {ContentType} from '../../types';
import {useAppDispatch} from '../store';
import contentsSlice from '../slices/contents';

// TODO: any 없애기
interface PropsType {
  route: any;
}

const TabMain = ({route}: PropsType) => {
  const [contents, setContents] = useState<ContentType[]>([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const queryIdx =
    route?.params?.name === 'opinion'
      ? 1
      : route?.params?.name === 'youtube'
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
        if (queryIdx === 2) {
          dispatch(
            contentsSlice.actions.setYoutubeContents(response.data.content),
          );
        }
        if (queryIdx === 3) {
          dispatch(
            contentsSlice.actions.setInsightContents(response.data.content),
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [dispatch, queryIdx]);

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
      <View style={{margin: 20, backgroundColor: 'white', borderRadius: 10}}>
        {contents.slice(0, count * 5).map((item: ContentType) => {
          return <Card key={item.id} item={item} />;
        })}
        {contents.length <= count * 5 ? null : (
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

export default TabMain;
