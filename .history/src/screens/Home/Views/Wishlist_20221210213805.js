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
  SafeAreaView
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMusic} from '../../../api/product';
import {musicAction, musicSelectors} from '../../../features/product/music';

function Wishlist() {
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
