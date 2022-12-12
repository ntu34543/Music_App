import React, {useRef} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';
import {removeWishlist} from '../../../api/product';
import Animated from 'react-native-reanimated';

function WishlistEle({nameSinger, nameSong, imgSong, onDeleteCart}) {
  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.containerFlate}>
    //       <View>
    //         <Image style={styles.img} source={{uri: imgSong}} />
    //       </View>
    //       <View>
    //         <Text style={styles.playlistName}>{nameSinger}</Text>
    //         <Text style={styles.playlistSong}>{nameSong}</Text>
    //         <Button title="Delete" color="red" onPress={onDeleteCart} />
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <View style={styles.containerFlate}>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerFlate: {
    height: 250,
    width: '40%',
    margin: 10,
    marginBottom: 5,
    backgroundColor: "red",
  },
  // playlistName: {
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontWeight: '800',
  //   fontSize: 16,
  //   lineHeight: 22,
  //   color: '#090F47',
  // },
  // playlistSong: {
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontSize: 12,
  //   fontWeight: '400',
  //   lineHeight: 19,
  //   color: '#090F47',
  // },
  img: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
});

export default () => {
  const dispatch = useDispatch();
  const wishlistList = useSelector(wishlistSelectors.selectAll);

  const onDeleteCart = async item => {
    try {
      const res = await removeWishlist(item.id);
      console.log(res);
      if (res?.data) {
        dispatch(wishlistAction.removeOne(item.id));
      }
    } catch (error) {
      console.log('🤟💋   removeToWishlist   error', error);
    }
  };
  return (
    <View>
      {wishlistList?.map((el, index) => (
        <WishlistEle
          key={index}
          nameSinger={el.nameSinger}
          nameSong={el.nameSong}
          imgSong={el.imgSong}
          onDeleteCart={() => onDeleteCart(el)}
        />
      ))}
    </View>
  );
};
