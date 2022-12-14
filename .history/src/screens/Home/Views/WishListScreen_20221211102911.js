import React, {useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';
import {removeWishlist} from '../../../api/product';
import Animated from 'react-native-reanimated';

function WishlistEle({nameSinger, nameSong, imgSong, onDeleteCart}) {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.containerFlate}>
    //       <View>
    //         <Image style={styles.img} source={{uri: imgSong}} />
    //       </View>
    //       <View>
    //         <Text style={styles.playlistName}>{nameSinger}</Text>
    //         <Text style={styles.playlistSong}>{nameSong}</Text>
    //         <Button title="Delete" color="red" onPress={onDeleteCart} />
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollA}}},
        ])}
        scrollEventThrottle={16}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <View style={styles.banner(scrollA)}>
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: scrollA => ({
    width: '200%',
    top: scrollA,
  }),
  boxStyle: {
    height: 100,
    width: '44%',
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginBottom: 5,
  },
  containerFlate: {
    marginHorizontal: 22,
    marginTop: 10,
  },
  playlistName: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#090F47',
  },
  playlistSong: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47',
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
});

export default () => {
  const dispatch = useDispatch();
  const wishlistList = useSelector(wishlistSelectors.selectAll);

  const onDeleteCart = async item => {
    try {
      const res = await removeWishlist(item.id);
      console.log(res);
      if (res?.data) {
        dispatch(wishlistAction.removeOne(item.id));
      }
    } catch (error) {
      console.log('🤟💋   removeToWishlist   error', error);
    }
  };
  return (
    <View>
      <Text>Wishlist</Text>
      {wishlistList?.map((el, index) => (
        <WishlistEle
          key={index}
          nameSinger={el.nameSinger}
          nameSong={el.nameSong}
          imgSong={el.imgSong}
          onDeleteCart={() => onDeleteCart(el)}
        />
      ))}
    </View>
  );
};
