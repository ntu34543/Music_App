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
  return (
    <SafeAreaView>
      <Text>Wishlist</Text>
      {wishlistList?.map(el => {
        return (
          <View style={styles.item}>
            <Text>{el?.nameSinger}</Text>
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
