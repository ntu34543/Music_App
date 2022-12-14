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
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';

function Wishlist() {
  const wishlistList = useSelector(wishlistSelectors.selectAll);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = useCallback(async () => {
    try {
      // setLoading(true);
      const res = await getWishlist();
      if (res?.data) {
        dispatch(wishlistAction.addAll(res?.data));
      }
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  }, []);

  const onDeleteCart = async item => {
    try {
      // const res = await addToCart(item);
      dispatch(cartAction.removeOne(item?.id));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };
  return (
    <SafeAreaView>
      {cartList?.map(el => {
        return (
          <View style={styles.item}>
            <Text>{el?.name}</Text>
            <Button
              title="Delete"
              color={'red'}
              onPress={() => onDeleteCart(el)}
            />
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
