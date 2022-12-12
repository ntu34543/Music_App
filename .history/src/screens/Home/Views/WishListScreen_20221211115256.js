import React, {useState} from 'react';
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
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';
import {removeWishlist} from '../../../api/product';

function WishlistEle({nameSinger, nameSong, imgSong, onDeleteCart}) {
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
    <ScrollView>
      {/* <View
        style={styles.containerFlate}
        >
        <View style={styles.boxStyle}>
          <View>
            <Image style={styles.img} source={{uri: imgSong}} />
          </View>
          <View>
            <Text style={styles.playlistName}>{nameSinger}</Text>
            <Text style={styles.playlistSong}>{nameSong}</Text>
            <Button title="Delete" color="red" onPress={onDeleteCart} />
          </View>
        </View>
      </View> */}
      <View style={styles.container}>
        <View style={styles.bgListartists}>
          <View style={styles.desMusic}>
            <Image style={styles.img} source={{uri: imgSong}} />
            <View>
              <Text style={styles.playlistName}>{nameSinger}</Text>
              <Text style={styles.playlistSong}>{nameSong}</Text>
            </View>
          </View>
          <View style={styles.btn}>
            <Button title="Delete" color="red" onPress={onDeleteCart} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
      <View style={styles.banner}>
        <ImageBackground
          source={require('../../../assets/image/pexels-photo-706142.jpg')}
          style={styles.imageBanner}>
          <View style={styles.txtGroup}>
            {/* <Text style={styles.text}>New album</Text> */}
          </View>
        </ImageBackground>
      </View>
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
