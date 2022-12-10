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
      img1: require('../../../assets/image/player.png'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '4:33',
    },
    {
      id: 1,
      name: 'Accu-check ',
      img1: require('../../../assets/image/player.png'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '5:33',
    },
    {
      id: 2,
      name: 'Accu-check ',
      img1: require('../../../assets/image/player.png'),
      img2: require('../../../assets/image/heart.png'),
      song: 'Active Test Strip',
      time: '2:33',
    },
    {
      id: 3,
      name: 'Accu-check ',
      img1: require('../../../assets/image/player.png'),
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
        <View>
          
        </View>
      </View>
      <View style={styles.artist}>
        <Text style={styles.title}>Top Singer</Text>
        <ScrollView horizontal={true}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={artists}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 120,
                    height: 160,
                    backgroundColor: '#F5F7FA',
                    borderRadius: 10,
                    marginRight: 16,
                  }}>
                  <Image
                    style={{
                      width: 120,
                      height: 100,
                      borderRadius: 10,
                    }}
                    source={item.img}
                  />
                  <View>
                    <Text style={styles.text1}>{item.name}</Text>
                    <Text style={styles.minitext}>{item.song}</Text>
                  </View>
                </View>
              );
            }}></FlatList>
        </ScrollView>
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
    paddingLeft: 25,
    paddingRight: 25,
  },
  banner: {
    position: 'relative',
    marginTop: 15,
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
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
  artist: {},
  title: {
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  text1: {
    marginTop: 4,
    marginLeft: 8,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 14,
    color: '#ee6055',
  },
  minitext: {
    marginTop: -28,
    marginLeft: 8,
    marginBottom: 6,
    width: 110,
    height: 40,
    fontSize: 12,
    color: 'gray',
  },

  allartists: {
    flex: 2,
  },
  titlePlaylist: {
    marginTop: 25,
    marginBottom: 24,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  bgListartists: {
    flex: 1,
    flexDirection: 'row',
    width: 157,
    height: 'auto',
    marginRight: 14,
    marginBottom: 16,
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
    width: 34,
    marginRight: 10,
    height: 30,
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
    display: 'flex',
    flexDirection: 'row',
  },
  miniTitle: {
    marginLeft: 230,
    top: 30,
  },
});
