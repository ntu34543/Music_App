import { Button, Text, View } from "react-native";
import { log } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction, wishlistSelectors } from "../../../features/product/wishlist";
import Wishlist from "./Wishlist";

export default () => {
    const dispatch = useDispatch()
    const wishlistList = useSelector(wishlistSelectors.selectAll);
    const onDeleteCart = async item => {
        try {
          // const res = await addToCart(item);
          dispatch(wishlistAction.removeOne(item?.id));
        } catch (error) {
          console.log('🤟💋   onAddToCart   error', error);
        }
      };
    console.log("wishlist: ", wishlistList)
    return (
        <View>
            <Text>Wishlist</Text>
            {
                wishlistList?.map((el, index)=> 
                    (
                        <Wishlist key={index} nameSinger={el?.nameSinger} onDeleteCart={onDeleteCart(el)}/>
                    )
                )
            }
        </View>
        
    )
}