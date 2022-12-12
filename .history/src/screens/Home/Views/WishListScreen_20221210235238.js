import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  wishlistAction,
  wishlistSelectors,
} from '../../../features/product/wishlist';
import removeToWishlist

function WishlistEle({nameSinger, onDeleteCart}) {
  return (
    <View style={styles.item}>
      <Text>{nameSinger}</Text>
      <Button title="Delete" color={'red'} onPress={onDeleteCart} />
    </View>
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
      // const res = await addToCart(item);
      dispatch(wishlistAction.removeOne(item?.id));
    } catch (error) {
      console.log('🤟💋   onAddToCart   error', error);
    }
  };
  console.log('wishlist: ', wishlistList);
  return (
    <View>
      <Text>Wishlist</Text>
      {wishlistList?.map((el, index) => (
        <WishlistEle
          key={index}
          nameSinger={el.nameSinger}
          onDeleteCart={() => onDeleteCart(el)}
        />
      ))}
    </View>
  );
};
