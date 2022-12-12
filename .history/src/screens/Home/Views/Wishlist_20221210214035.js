import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWishlist} from '../../../api/product';
import {wishlistAction, wishlistSelectors} from '../../../features/product/wishlist';

function Wishlist() {
  const wishlistList = useSelector(wishlisSelectors.selectAll);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = useCallback(async () => {
    try {
      // setLoading(true);
      const res = await getAllMusic();
      if (res?.data) {
        dispatch(musicAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  }, []);

  const onAddToCart = async item => {
    try {
      // const res = await addToCart(item);
      dispatch(cartAction.addOne(item));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };
  return (
    <SafeAreaView>
      {musicList?.map(el => {
        return (
          <View style={styles.item}>
            {/* <Button title="Add" onPress={() => onAddToCart(el)} /> */}
            <View style={styles.bgListartists}>
              <View>
                <Image style={styles.img} source={{uri: el?.imgSong}} />
              </View>
              <View>
                <Text style={styles.playlistName}>{el?.nameSinger}</Text>
                <Text style={styles.playlistSong}>{el?.nameSong}</Text>
              </View>
              <Text style={styles.timeout}>{el?.time}</Text>
              {/* <TouchableOpacity android_ripple={{color: '#ffc618'}}> */}
              <Button title="Add" onPress={() => onAddToCart(el)} />
              {/* </TouchableOpacity> */}
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
});

export default Wishlist;
