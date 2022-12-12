import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMusic} from '../../../api/product';
import {musicAction, musicSelectors} from '../../../features/product/music';

function Wishlist() {
  const [playlist, setPlaylist] = useState([
    {
      id: 0,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer1.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
    {
      id: 1,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer2.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '5:33',
    },
    {
      id: 2,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer3.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '2:33',
    },
    {
      id: 3,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer4.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
    {
      id: 0,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer1.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
    {
      id: 1,
      name: 'Accu-check ',
      img1: require('../../../assets/image/singer2.jpg'),
      img2: require('../../../assets/image/3cham.png'),
      song: 'Active Test Strip',
      time: '5:33',
    },
  ]);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          numColumns={2}
          data={playlist}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerFlate}>
                <View>
                  <Image style={styles.img} source={item.img1} />
                </View>
                <View>
                  <Text style={styles.playlistName}>{item.name}</Text>
                  <Text style={styles.playlistSong}>{item.song}</Text>
                </View>
              </View>
            )}}></FlatList>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  containerFlate: {
    marginHorizontal: 22,
    marginTop: 10
  },
  playlistName: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#090F47'
  },
  playlistSong: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 10,
  }
});

export default Wishlist;
