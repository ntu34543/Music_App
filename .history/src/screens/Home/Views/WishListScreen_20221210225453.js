import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { wishlistAction, wishlistSelectors } from "../../../features/product/wishlist";

export default () => {
    const wishlistList = useSelector(wishlistSelectors.selectAll);
    const onDeleteCart = async item => {
        try {
          // const res = await addToCart(item);
          dispatch(wishlistAction.removeOne(item?.id));
        } catch (error) {
          console.log('🤟💋   onAddToCart   error', error);
        }
      };
    return (
        <View>
            <Text>Wishlist</Text>
            {
                wishlistList?.map(el => 
                    (
                        <Wishlist nameSinger={el?.nameSinger} onDeleteCart={onDeleteCart(el)}/>
                    )
                )
            }
        </View>
        
    )
}