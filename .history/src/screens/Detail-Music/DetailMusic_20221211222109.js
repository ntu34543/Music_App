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
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={BackMain}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{id}</Text>
      <Text>{data}</Text>
      {data.find(el => {
        return 
      })}
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});
