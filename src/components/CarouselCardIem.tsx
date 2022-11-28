import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}: any) => {
  return (
    <View style={styles.container} key={index}>
      {/*<Pressable>*/}
      <Image
        style={styles.image}
        source={{uri: item.image, height: 100}}
        resizeMode="cover"
      />
      {/*</Pressable>*/}
      <View
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH - 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    // paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
