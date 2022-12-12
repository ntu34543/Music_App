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
  console.log(nameSinger, "sdfsffsd");
  return (

      <View style={styles.item}>
        <Text>{nameSinger}tủtynjgdry</Text>
        <Button title="Delete" color={'red'} onPress={onDeleteCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
});

export default Wishlist;
