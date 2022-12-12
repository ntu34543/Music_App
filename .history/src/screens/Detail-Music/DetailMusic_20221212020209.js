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

export default function DetailMusic({route, navigator}) {
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const play = () => {
    let summer = new Sound(
      'https://github.com/ntu34543/music/blob/main/Dreamers-Jungkook-FIFA-World-Cup-2022.mp3?raw=true',
      null,
      err => {
        if (err) {
          console.log('hata', err);
          return;
        }
        summer.play(success => {
          console.log('end', success);
        });
        setDuration(summer.getDuration());
      },
    );
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
  const musics = route.params.musics;
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feed', {musics: musics});
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        <View>
          <Text>{musics.nameSinger}</Text>
        </View>
      </View>
      <View>
        <Button
          title="Çal"
          onPress={() => {
            play();
          }}
        />
        <Button
          title="Duraklat"
          onPress={() => {
            music.pause();
          }}
        />

        <Button
          title="Başlat"
          onPress={() => {
            music.play();
          }}
        />

        <Button
          title="Durdur"
          onPress={() => {
            music.stop();
          }}
        />

        <Button
          title="Ses Arttır"
          onPress={() => {
            setVolume('+');
          }}
        />

        <Button
          title="Ses Azalt"
          onPress={() => {
            setVolume('-');
          }}
        />

        <Button
          title="İleri Sar"
          onPress={() => {
            music.setCurrentTime(100);
          }}
        />

        <Button
          title="Kontrol"
          onPress={() => {
            console.log(music.isPlaying());
          }}
        />

        <Text>
          {second} / Total Second {duration}
        </Text>
      </View>
    </>
  );
}
// Satoshi
const styles = StyleSheet.create({});
