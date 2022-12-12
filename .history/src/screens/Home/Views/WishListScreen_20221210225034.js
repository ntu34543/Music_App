import { View } from "react-native";
import { useSelector } from "react-redux";
import { wishlistSelectors } from "../../../features/product/wishlist";

export default () => {
    const wishlistList = useSelector(wishlistSelectors.selectAll);
    return (
        <View>

        </VieW>
        
    )
}