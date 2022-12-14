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
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/music/wishlist';
import {removeWishlist} from '../../../api/music';

function WishlistEle({
  nameSinger,
  nameSong,
  imgSong,
  onDeleteCart,
  navigation,
}) {
  return (
    <>
      <TouchableOpacity
        // onPress={() => moveToDetail(id)}
        onPress={() => {
          navigation.navigate('DetailMusic');
        }}
        android_ripple={{color: '#ffc618'}}>
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
      </TouchableOpacity>
    </>
  );
}

export default () => {
  const dispatch = useDispatch();
  const wishlistList = useSelector(wishlistSelectors.selectAll);

  const onDeleteCart = async item => {
    try {
      const res = await removeWishlist(item.id);
      if (res?.data) {
        dispatch(wishlistAction.removeOne(item.id));
        console.log(dispatch(wishlistAction.removeOne(item.id)));
      }
    } catch (error) {
      console.log('🤟💋   removeToWishlist   error', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.banner}>
        <ImageBackground
          source={require('../../../assets/image/pexels-photo-706142.jpg')}
          style={styles.imageBanner}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>New album</Text>
          </View>
        </ImageBackground>
      </View> */}
      <ScrollView>
        <View style={styles.body}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    // padding: 15,
    paddingHorizontal: 15,
    paddingVertical: 1,
    flex: 1,
  },
  bgListartists: {
    padding: 10,
    borderRadius: 99,
    flex: 1,
    flexDirection: 'row',
    height: 'auto',
    marginRight: 2,
    marginLeft: 2,
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#fbfbfb',
    elevation: 5,
  },
  playlistName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 16,
    color: 'black',
  },
  playlistSong: {
    marginLeft: 16,
    fontSize: 12,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 99,
  },
  desMusic: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  banner: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  txtGroup: {
    // position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Overpass',
  },
});
