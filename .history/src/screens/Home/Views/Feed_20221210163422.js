import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Home() {
  const [artists, setArtists] = useState([
    {
      id: 0,
      name: 'Sugar',
      img: require('../../../assets/image/singer1.jpg'),
      song: 'Made you look',
    },
    {
      id: 1,
      name: 'Taylor Swift',
      img: require('../../../assets/image/singer2.jpg'),
      song: 'Love story',
    },
    {
      id: 2,
      name: 'Jackson',
      img: require('../../../assets/image/singer3.jpg'),
      song: 'Why not me',
    },
    {
      id: 3,
      name: 'Michael Rain',
      img: require('../../../assets/image/singer4.jpg'),
      song: 'Next Generation',
    },
  ]);
  const [playlist, setPlaylist] = useState([
    {
      id: 0,
      name: 'Accu-check ',
      img1: require('../../../assets/image/sofiaAlejandra.jpg'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
    {
      id: 1,
      name: 'Accu-check ',
      img1: require('../../../assets/image/sofiaAlejandra.jpg'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '5:33',
    },
    {
      id: 2,
      name: 'Accu-check ',
      img1: require('../../../assets/image/sofiaAlejandra.jpg'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '2:33',
    },
    {
      id: 3,
      name: 'Accu-check ',
      img1: require('../../../assets/image/sofiaAlejandra.jpg'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground
          source={require('../../../assets/image/sofiaAlejandra.jpg')}
          style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>New album</Text>
          </View>
        </ImageBackground>
        <View style={styles.twoimage}>
          <ImageBackground
            source={require('../../../assets/image/sofiaAlejandra.jpg')}
            style={styles.image1}></ImageBackground>
          <ImageBackground
            source={require('../../../assets/image/sofiaAlejandra.jpg')}
            style={styles.image2}></ImageBackground>
        </View>
      </View>
      <View style={styles.allartists}>
        <View style={styles.bothtitle}>
          <Text style={styles.titlePlaylist}>Playlist</Text>
          <Text style={styles.miniTitle}>See More</Text>
        </View>
        <ScrollView>
          <FlatList
            showsHorizontalScrollIndicator={false}
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
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  banner: {
    position: 'relative',
    marginTop: 15,
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  twoimage: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  image: {
    width: 220,
    height: 225,
    borderRadius: 10,
  },
  image1: {
    width: 130,
    height: 100,
    borderRadius: 20,
  },
  image2: {
    marginTop: 15,
    width: 130,
    height: 110,
    borderRadius: 20,
  },
  txtGroup: {
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily: 'Overpass',
  },
  allartists: {
    flex: 2.9,
  },
  titlePlaylist: {
    marginBottom: 24,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  bgListartists: {
    flex: 1,
    flexDirection: 'row',
    // width: 157,
    height: 'auto',
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 14,
    color: 'black',
  },
  playlistSong: {
    marginLeft: 16,
    fontSize: 12,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  timeout: {
    marginRight: 10,
    marginLeft: 90,
  },
  img2: {
    width: 30,
    marginLeft: 17,
    height: 30,
  },
  bothtitle: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  miniTitle: {
    // marginLeft: 230,
    // top: 30,
  },
});
