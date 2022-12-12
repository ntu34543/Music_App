import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function DetailMusic({route, navigator}) {
  const music = route.params.music;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={BackMain}>
        <Text>Back</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Feed', {music: music});
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View>
        <Text>{music.nameSigner}</Text>
      </View>
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});
