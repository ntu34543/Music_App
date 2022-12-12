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

function Wishlist(nameSinger, onDeleteCart) {
  return (
    <SafeAreaView>
      <Text>Wishlist</Text>
      {/* // <View style={styles.item}>
            //   <Text>{el?.nameSinger}</Text>
            //   <Button
            //     title="Delete"
            //     color={'red'}
            //     onPress={() => onDeleteCart(el)}
            //   />
            // </View> */}
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
