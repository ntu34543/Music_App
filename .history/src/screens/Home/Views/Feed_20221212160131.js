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
  Alert,
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
import DetailMusic from '../../Detail-Music/DetailMusic';

export default function Home({navigation}) {
  const musicList = useSelector(musicSelectors.selectAll);
  // const wishlistList = useSelector(wishlistSelectors.selectAll);
  const dispatch = useDispatch();

  const [isDetail, setIsDetail] = useState(-1);
  const [data, setData] = useState();

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
        Alert.alert('Add', 'Add to wishList', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
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

  // const moveToDetail = id => {
  //   setIsDetail(id);
  // };
  // const backMain = () => {
  //   setIsDetail(-1);
  // };
  return (
    <>
      {/* {isDetail === -1 ? ( */}
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            source={require('../../../assets/image/Musical.jpg')}
            style={styles.image}
          />
          <View style={styles.twoimage}>
            <Image
              source={require('../../../assets/image/headphones.jpg')}
              style={styles.image1}
            />
            <Image
              source={require('../../../assets/image/artist.jpg')}
              style={styles.image2}
            />
          </View>
        </View>
        <View style={styles.allartists}>
          <View style={styles.bothtitle}>
            <Text style={styles.titlePlaylist}>Playlist</Text>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/image/addMusic.png')}
                style={styles.addMusic}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {musicList?.map((el, id) => {
              return (
                <View key={id} style={styles.item}>
                  <TouchableOpacity
                    // onPress={() => moveToDetail(id)}
                    onPress={() => {
                      navigation.navigate('DetailMusic', {musics: el});
                      key = {id};
                    }}
                    android_ripple={{color: '#ffc618'}}>
                    {/* <Button title="Add" onPress={() => onAddToCart(el)} /> */}
                    <View style={styles.bgListartists}>
                      <View>
                        <Image style={styles.img} source={{uri: el?.imgSong}} />
                      </View>
                      <View>
                        <Text style={styles.playlistName}>
                          {el?.nameSinger}
                        </Text>
                        <Text style={styles.playlistSong}>{el?.nameSong}</Text>
                      </View>
                      <Text style={styles.timeout}>{el?.time}</Text>
                      {/* <Text style={styles.timeout}>{el?.audio}</Text> */}
                      {/* <Button title="Add" onPress={() => onAddToWishlist(el)} /> */}
                      <TouchableOpacity onPress={() => onAddToWishlist(el)}>
                        <ImageBackground
                          source={require('../../../assets/image/heartRed.png')}
                          style={styles.heartRed}></ImageBackground>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      {/* ) : (
        <DetailMusic
          id={isDetail}
          BackMain={backMain}
          data={musicList}
        />
      )} */}
    </>
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
    height: 110,
    borderRadius: 20,
  },
  image2: {
    marginTop: 15,
    width: 150,
    height: 100,
    borderRadius: 6,
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
  heartRed: {
    width: 25,
    height: 25,
  },
  addMusic: {
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
