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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMusic} from '../../../api/product';
import {musicAction, musicSelectors} from '../../../features/product/music';

export default function Home() {
  const musicList = useSelector(musicSelectors.selectAll);

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

  // const [artists, setArtists] = useState([
  //   {
  //     id: 0,
  //     name: 'Sugar',
  //     img: require('../../../assets/image/singer1.jpg'),
  //     song: 'Made you look',
  //   },
  //   {
  //     id: 1,
  //     name: 'Taylor Swift',
  //     img: require('../../../assets/image/singer2.jpg'),
  //     song: 'Love story',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jackson',
  //     img: require('../../../assets/image/singer3.jpg'),
  //     song: 'Why not me',
  //   },
  //   {
  //     id: 3,
  //     name: 'Michael Rain',
  //     img: require('../../../assets/image/singer4.jpg'),
  //     song: 'Next Generation',
  //   },
  // ]);
  // const [playlist, setPlaylist] = useState([
  //   {
  //     id: 0,
  //     name: 'Accu-check',
  //     img1: require('../../../assets/image/sofiaAlejandra.jpg'),
  //     img2: require('../../../assets/image/heart.png'),
  //     song: 'Active Test Strip',
  //     time: '4:33',
  //   },
  //   {
  //     id: 1,
  //     name: 'Bccu-check ',
  //     img1: require('../../../assets/image/sofiaAlejandra.jpg'),
  //     img2: require('../../../assets/image/heart.png'),
  //     song: 'Active Test Strip',
  //     time: '5:33',
  //   },
  //   {
  //     id: 2,
  //     name: 'Cccu-check ',
  //     img1: require('../../../assets/image/sofiaAlejandra.jpg'),
  //     img2: require('../../../assets/image/heart.png'),
  //     song: 'Active Test Strip',
  //     time: '2:33',
  //   },
  //   {
  //     id: 3,
  //     name: 'Dccu-check ',
  //     img1: require('../../../assets/image/sofiaAlejandra.jpg'),
  //     img2: require('../../../assets/image/heart.png'),
  //     song: 'Active Test Strip',
  //     time: '4:33',
  //   },
  // ]);
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
    // marginBottom: 6,
    // width: 350,
    // height: 500,
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    // lineHeight: 21,
    fontFamily: 'Overpass',
    // color: "#9f0713",
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
    width: 150,
    fontSize: 15,
    color: 'black',
  },
  playlistSong: {
    marginLeft: 16,
    fontSize: 15,
    width: 150,
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 99,
  },
  timeout: {
    marginRight: 10,
    marginLeft: 50,
  },
  img2: {
    width: 30,
    marginLeft: 5,
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
