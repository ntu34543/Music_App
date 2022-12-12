import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

export default function DetailMusic({id, backMain}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backMain}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{id}</Text>
    </View>
  );
}
// Satoshi
const styles = StyleSheet.create({});
