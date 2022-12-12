import {Button, StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';
import {removeToWishlist} from '../../../api/product';

function WishlistEle({nameSinger, onDeleteCart}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          numColumns={2}
          data={playlist}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerFlate}>
                <View>
                  <Image style={styles.img} source={item.img1} />
                </View>
                <View>
                  <Text style={styles.playlistName}>{item.name}</Text>
                  <Text style={styles.playlistSong}>{item.song}</Text>
                </View>
              </View>
            )}}></FlatList>
      </ScrollView>
    </SafeAreaView >
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

export default () => {
  const dispatch = useDispatch();
  const wishlistList = useSelector(wishlistSelectors.selectAll);

  const onDeleteCart = async item => {
    try {
      const res = await removeToWishlist(item);
      if (res?.data) {
        dispatch(wishlistAction.removeOne(item.id));
      }
    } catch (error) {
      console.log('🤟💋   removeToWishlist   error', error);
    }
  };
  return (
    <View>
      <Text>Wishlist</Text>
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
