import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { wishlistSelectors } from "../../../features/product/wishlist";

export default () => {
    const wishlistList = useSelector(wishlistSelectors.selectAll);
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