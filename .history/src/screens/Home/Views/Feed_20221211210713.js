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
import {getAllMusic} from '../../../api/music';
import {addToWishlist} from '../../../api/music';
import {musicAction, musicSelectors} from '../../../features/music/music';
import {getWishlist} from '../../../api/music';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/music/wishlist';

export default function Home() {
  const musicList = useSelector(musicSelectors.selectAll);
  // const wishlistList = useSelector(wishlistSelectors.selectAll);
  const dispatch = useDispatch();

  const [isDetail,setIsDetail] = useState(-1)

  useEffect(() => {
    fetchMusic();
    fetchWishlist();
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

  const onAddToWishlist = async item => {
    try {
      const res = await addToWishlist(item);
      if (res?.data) {
        dispatch(wishlistAction.addOne(item));
      }
    } catch (error) {
      console.log('🤟💋   onAddToWishlist   error', error);
    }
  };

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
        {isDetail === -1 ?  <ScrollView>
          {musicList?.map((el, id) => {
            return (
              <View key={id} style={styles.item}>
                <TouchableOpacity android_ripple={{color: '#ffc618'}}>
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
                    <Button title="Add" onPress={() => onAddToWishlist(el)} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>:<Deta}
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
