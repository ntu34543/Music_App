import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';

function Wishlist({nameSinger, onDeleteCart}) {
  console.log(nameSinger);
  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
      <View style={styles.item}>
        <Text>{nameSinger}</Text>
        <Button title="Delete" color={'red'} onPress={onDeleteCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
    flex: 1,
  },
});

export default Wishlist;
