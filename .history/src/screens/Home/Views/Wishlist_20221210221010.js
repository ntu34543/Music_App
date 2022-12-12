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

function Wishlist({prop}) {
  return (
    <SafeAreaView>
      <Text>Wishlist</Text>
      <View style={styles.item}>
        <Text>{nameSinger}</Text>
        <Button title="Delete" color={'red'} onPress={onDeleteCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
});

export default Wishlist;
