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
import { useNavigation } from '@react-navigation/native';

export default function DetailMusic({ route, navigator }) {
  const music = route.params.music;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={BackMain}>
        <Text>Back</Text>
      </TouchableOpacity> */}
      <Text>{id}</Text>
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});