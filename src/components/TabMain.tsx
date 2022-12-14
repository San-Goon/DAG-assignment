import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, Text, FlatList} from 'react-native';
import {useCallback} from 'react';
import NewCardComponent from './NewCardComponent';
import axios from 'axios';
import Card from './Card';
import {ContentType} from '../../types';
import {useAppDispatch} from '../store';
import contentsSlice from '../slices/contents';
import sectorsSlice from '../slices/sectors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TabStackParamList} from './TabComponent';

const TabMain = () => {
  const route = useRoute<RouteProp<TabStackParamList, 'TabMain'>>();
  const [contents, setContents] = useState<ContentType[]>([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
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
        dispatch(sectorsSlice.actions.setSectors(response.data.sector));
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

  const renderItem = useCallback(({item}: {item: ContentType}) => {
    return <Card item={item} />;
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <FlatList
      ListHeaderComponent={
        newArrivalContent.length ? (
          <NewCardComponent data={newArrivalContent} />
        ) : null
      }
      data={contents.slice(0, count * 5)}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={
        contents.length <= count * 5 ? null : (
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
              ?????????
            </Text>
          </Pressable>
        )
      }
    />
  );
};

export default TabMain;
