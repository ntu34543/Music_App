import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Sound from 'react-native-sound';
// https://github.com/ntu34543/music/blob/main/Dreamers-Jungkook-FIFA-World-Cup-2022.mp3?raw=true
// https://github.com/ntu34543/music/blob/main/Luis%20Fonsi%20-%20Despacito%20ft.%20Daddy%20Yankee%20(128%20kbps).mp3?raw=true
// https://github.com/ntu34543/music/blob/main/Maroon%205%20-%20Girls%20Like%20You%20ft.%20Cardi%20B%20(Official%20Music%20Video)%20(64%20kbps).mp3?raw=true

export default function DetailMusic({route, navigator}) {
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const musics = route.params.musics;
  const navigation = useNavigation();
  const play = () => {
    let summer = new Sound(musics.audio, null, err => {
      if (err) {
        console.log('hata', err);
        return;
      }
      summer.play(success => {
        console.log('end', success);
      });
      setDuration(summer.getDuration());
    });
    console.log('summer', summer);
    setMusic(summer);
  };
  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          setSecond(second);
        });
      }, 100);
    }
  }, [music]);
  const setVolume = type => {
    const volume = music.getVolume();
    console.log(volume);
    if (type == '+') {
      const newVolume = volume + 0.1;
      music.setVolume(newVolume);
    } else {
      const newVolume = volume - 0.1;
      music.setVolume(newVolume);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feed', {musics: musics});
          }}>
          <Image
            style={styles.image}
            source={require('../../assets/image/back.png')}
          />
        </TouchableOpacity>
        <View style={styles.musicPlayer}>
          <Image style={styles.img} source={{uri: musics.imgSong}} />
          <Text style={styles.nameSong}>{musics.nameSong}</Text>
          <Text style={styles.nameSinger}>{musics.nameSinger}</Text>
        </View>
      </View>
      <View style={styles.buttonPlay}>


        <TouchableOpacity
          title="-"
          onPress={() => {
            setVolume('-');
          }}>
          <Image
            source={require('../.././assets/image/down.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          title="Increase Time"
          onPress={() => {
            music.setCurrentTime(100);
          }}
        >
          <Image
            source={require('../.././assets/image/why.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          styles={styles.buttonPlay1}
          title=""
          onPress={() => {
            play();
          }}>
          <Image
            source={require('../.././assets/image/play.png')}
            style={{ width: 28, height: 28, }}
          />

        </TouchableOpacity>
        <TouchableOpacity
          title="Increase Time"
          onPress={() => {
            music.setCurrentTime(100);
          }}
        >
          <Image
            source={require('../.././assets/image/increase.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="+"
          onPress={() => {
            setVolume('+');

          }}>
          <Image
            source={require('../.././assets/image/plus.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.buttonPlay2}>


        <TouchableOpacity
          title="Pause"
          onPress={() => {
            music.pause();
          }}
        >
          <Image
            source={require('../.././assets/image/pause.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Continue"
          onPress={() => {
            music.play();
          }}
        >
          <Image
            source={require('../.././assets/image/continues.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Stop"
          onPress={() => {
            music.stop();
          }}
        >
          <Image
            source={require('../.././assets/image/stop.png')}
            style={{ width: 25, height: 25, }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          title="isPlaying"
          onPress={() => {
            console.log(music.isPlaying());
          }}
        >
          <Image
            source={require('../.././assets/image/heart.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="isPlaying"
          onPress={() => {
            console.log(music.isPlaying());
          }}
        >
          <Image
            source={require('../.././assets/image/heart.png')}
            style={{ width: 20, height: 15, }}
          />
        </TouchableOpacity>
        <Text>
          {second} / Total Second {duration}
        </Text>
        <TouchableOpacity>
          <
    </>
  );
}
// Satoshi
const styles = StyleSheet.create({});
