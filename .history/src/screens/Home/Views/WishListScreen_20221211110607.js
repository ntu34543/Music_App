import React, {useState} from 'react';
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

function WishlistEle({nameSinger, nameSong, imgSong, onDeleteCart}) {
  const [data, setData] = useState({
    nameSinger,
    nameSong,
    imgSong,
    onDeleteCart,
  });
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
      {/* <View
        style={styles.containerFlate}
        >
        <View style={styles.boxStyle}>
          <View>
            <Image style={styles.img} source={{uri: imgSong}} />
          </View>
          <View>
            <Text style={styles.playlistName}>{nameSinger}</Text>
            <Text style={styles.playlistSong}>{nameSong}</Text>
            <Button title="Delete" color="red" onPress={onDeleteCart} />
          </View>
        </View>
      </View> */}
      <View style={styles.bgListartists}>
        <View>
          <Image style={styles.img} source={imgSong} />
        </View>
        <View>
          <Text style={styles.playlistName}>{nameSinger}</Text>
          <Text style={styles.playlistSong}>{nameSong}</Text>
        </View>
        <Button title="Delete" color="red" onPress={onDeleteCart} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    height: 250,
    width: '41%',
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginBottom: 5,
  },
  containerFlate: {
    // marginHorizontal: 22,
    // marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  playlistName: {
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#090F47',
  },
  playlistSong: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47',
  },
  // img: {
  //   width: 160,
  //   height: 160,
  //   borderRadius: 10,
  // },
  bgListartists: {
    flex: 1,
    flexDirection: 'row',
    width: 157,
    height: 'auto',
    marginRight: 14,
    marginBottom: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  playlistName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 16,
    color: 'black',
  },
  playlistSong: {
    marginLeft: 16,
    fontSize: 12,
  },
  img: {
    width: 60,
    marginRight: 10,
    height: 60,
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
