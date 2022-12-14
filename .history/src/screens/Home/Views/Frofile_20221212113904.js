import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {musicAction, musicSelectors} from '../../../features/music/music';
import {getAllMusic} from '../../../api/music';

export default function Profile() {
  const dispatch = useDispatch();
  const musicList = useSelector(musicSelectors.selectAll);
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
  return (
    <>
    </>
  );
}
// Satoshi
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 25,
  },
  headerContent: {
    padding: 5,
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
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
  },
  userInfo: {
    fontSize: 12,
    color: '#778899',
    fontWeight: '600',
    marginTop: 10,
  },
  follow: {
    textAlign: 'center',
    alignItems: 'center',
  },
  followers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    flexDirection: 'column',
    width: 157,
    height: 'auto',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playlistName: {
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  playlistSong: {
    textAlign: 'center',
    fontSize: 12,
  },
  img: {
    width: 150,
    marginRight: 10,
    height: 150,
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
