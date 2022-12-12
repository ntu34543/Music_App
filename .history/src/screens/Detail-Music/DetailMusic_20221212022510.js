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
    let summer = new Sound(musics., null, err => {
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
          <Text>Back</Text>
        </TouchableOpacity>
        <View>
          <Text>{musics.id}</Text>
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
