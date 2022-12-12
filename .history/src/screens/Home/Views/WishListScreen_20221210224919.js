export default () => {
    return (
        <Text>Wishlist</Text>
        {wishlistList?.map(el => {
          return (
            // <View style={styles.item}>
            //   <Text>{el?.nameSinger}</Text>
            //   <Button
            //     title="Delete"
            //     color={'red'}
            //     onPress={() => onDeleteCart(el)}
            //   />
            // </View>
          );
        })}
    )
}