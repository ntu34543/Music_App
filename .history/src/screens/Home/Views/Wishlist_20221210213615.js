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
  <SafeAreaView>
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMusic} from '../../../api/product';
import {musicAction, musicSelectors} from '../../../features/product/music';

function Wishlist() {
  return (
    <SafeAreaView>
      <View>
        <Text>Làm vào trong đây nha</Text>
      </View>
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
