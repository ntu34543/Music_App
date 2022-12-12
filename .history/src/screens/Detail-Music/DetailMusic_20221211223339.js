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

export default function DetailMusic({id, BackMain, data}) {
  console.log(
    data.find(el => {
      return el.id;
    }),
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={BackMain}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{id}</Text>
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});
