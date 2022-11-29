import React, {useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import CardButtons from './CardButtons';

const YoutubeTabDetail = ({route}) => {
  const content = useSelector(
    (state: RootState) => state.contents.youtubeContents,
  ).filter(v => v.id === route.params.id);
  const playerRef = useRef<YoutubeIframeRef>(null);
  console.log(content);

  return (
    <ScrollView>
      <YoutubePlayer ref={playerRef} height={200} videoId={content[0].link} />
      <Text>{content[0].title}</Text>
      <Text>{content[0].body}</Text>
      <CardButtons item={content[0]} />
    </ScrollView>
  );
};

export default YoutubeTabDetail;
