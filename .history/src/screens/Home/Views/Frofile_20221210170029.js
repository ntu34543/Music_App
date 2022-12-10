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
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/image/singer2.jpg')}
          />
          <Text style={styles.userInfo}>alexamsungwlyly@mail.com </Text>
          <Text style={styles.name}>Phuong Lyly </Text>
        </View>
        <View style={styles.followers}>
          <View style={styles.followerss}>
            <Text style={styles.numberOfFollowers}>746</Text>
            <Text style={styles.text}>Followes</Text>
          </View>
          <View>
            <Text style={styles.numberOfFollowers}>706</Text>
            <Text style={styles.text}>Followes</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>PUBLIC PLAYLISTS</Text>
        <ScrollView>
          <FlatList
            numColumns={1}
            data={playlist}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View style={styles.bgListartists}>
                  <View>
                    <Image style={styles.img} source={item.img1} />
                  </View>
                  <View>
                    <Text style={styles.playlistName}>{item.name}</Text>
                    <Text style={styles.playlistSong}>{item.song}</Text>
                  </View>

                  <Text style={styles.timeout}>{item.time}</Text>
                  <Image style={styles.img2} source={item.img2} />
                </View>
              );
            }}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerContent: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 2,
  },
  name: {
    fontSize: 18,
    color: '#ee6055',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 12,
    color: '#778899',
    fontWeight: '600',
  },
  followers: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 80,
  },
  followerss: {
    marginRight: 140,
  },
  numberOfFollowers: {
    color: 'black',
    fontSize: 20,
  },
  body: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  allartists: {
    flex: 2,
  },

  bgListartists: {
    flex: 1,
    flexDirection: 'row',
    width: 157,
    height: 'auto',
    marginRight: 14,
    // marginBottom: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: 60,
    marginRight: 10,
    height: 60,
    borderRadius: 10,
  },
  timeout: {
    marginRight: 10,
    marginLeft: 80,
  },
  img2: {
    width: 30,
    marginLeft: 0,
    height: 30,
  },
  bothtitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  miniTitle: {
    marginLeft: 240,
    top: 30,
  },
});
