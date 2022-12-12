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
  Alert,
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

export default function DetailMusic({route, navigator}) {
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const play = () => {
    let summer = new Sound(
      'https://open.spotify.com/track/1RDvyOk4WtPCtoqciJwVn8?si=bb8dc49a67e847e7&nd=1',
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
      {/* <View>
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
      </View> */}
    </>
  );
}
// Satoshi
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>
);

const Header = ({children, style}) => <Text style={[styles.header, style]}>{children}</Text>;

const Feature = ({title, onPress, buttonLabel = 'PLAY', status}) => (
  <View style={styles.feature}>
    <Header style={{flex: 1}}>{title}</Header>
    {status ? <Text style={{padding: 5}}>{resultIcons[status] || ''}</Text> : null}
    <Button title={buttonLabel} onPress={onPress} />
  </View>
);

const resultIcons = {
  '': '',
  pending: '?',
  playing: '\u25B6',
  win: '\u2713',
  fail: '\u274C',
};

const audioTests = [
  {
    title: 'mp3 in bundle',
    url: 'advertising.mp3',
    basePath: Sound.MAIN_BUNDLE,
  },
  {
    title: 'mp3 in bundle (looped)',
    url: 'advertising.mp3',
    basePath: Sound.MAIN_BUNDLE,
    onPrepared: (sound, component) => {
      sound.setNumberOfLoops(-1);
      component.setState({loopingSound: sound});
    },
  },
  {
    title: 'mp3 via require()',
    isRequire: true,
    url: require('./advertising.mp3'),
  },
  {
    title: 'mp3 remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
  },
  {
    title: 'mp3 remote - file doesn\'t exist',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/file-not-here.mp3',
  },
  {
    title: 'aac remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
  },
  {
    title: 'wav remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
  },
  {
    title: 'aac via require()',
    isRequire: true,
    url: require('./pew2.aac'),
  },
  {
    title: 'wav via require()',
    isRequire: true,
    url: require('./frog.wav'),
  },
];

function setTestState(testInfo, component, status) {
  component.setState({tests: {...component.state.tests, [testInfo.title]: status}});
}

/**
 * Generic play function for majority of tests
 */
function playSound(testInfo, component) {
  setTestState(testInfo, component, 'pending');

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      setTestState(testInfo, component, 'fail');
      return;
    }
    setTestState(testInfo, component, 'playing');
    // Run optional pre-play callback
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      // Success counts as getting to the end
      setTestState(testInfo, component, 'win');
      // Release when it's done so we're not using up resources
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}

class MainView extends Component {
  constructor(props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    // Special case for stopping
    this.stopSoundLooped = () => {
      if (!this.state.loopingSound) {
        return;
      }

      this.state.loopingSound.stop().release();
      this.setState({loopingSound: null, tests: {...this.state.tests, ['mp3 in bundle (looped)']: 'win'}});
    };

    this.state = {
      loopingSound: undefined,
      tests: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.title}>react-native-sound-demo</Header>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
          {audioTests.map(testInfo => {
            return (
              <Feature
                status={this.state.tests[testInfo.title]}
                key={testInfo.title}
                title={testInfo.title}
                onPress={() => {
                  return playSound(testInfo, this);
                }}
              />
            );
          })}
          <Feature title="mp3 in bundle (looped)" buttonLabel={'STOP'} onPress={this.stopSoundLooped} />
        </ScrollView>
      </View>
    );
  }
}

export default MainView;
