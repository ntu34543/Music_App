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

export default function DetailMusic({id, BackMain, NameSong}) {
  console.log(data);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={BackMain}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{id}</Text>
      {/* {data.find(el => {
        return (
          <View>
            <Text>{el?.id}</Text>
            <Text>{el?.nameSinger}</Text>
          </View>
        );
      })} */}
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});
