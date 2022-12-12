import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

export default function Profile() {
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
  ]);
  return (
    <View style={styles.container}>
      
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({
  
});
