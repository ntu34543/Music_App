import React, {useCallback, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feed from './Views/Feed';
import Frofile from './Views/Frofile';
import Wishlist from './Views/Wishlist';
// import {useDispatch, useSelector} from 'react-redux';
// import {getAllProduct, getCart} from '../../api/product';
// import {cartAction, cartSelectors} from '../../features/product/cart';
// import {productAction, productSelectors} from '../../features/product/product';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{ header: () => null }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Product') {
              iconName = 'plus-square';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'My Profile') {
              iconName = 'user';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Notify') {
              iconName = 'bell';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Cart') {
              iconName = 'cart-plus';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Contact') {
              iconName = 'phone';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: '#4157ff',
          inactiveTintColor: '#555',
          inactiveBackgroundColor: 'white',
          showLabel: true,
          labelStyle: {fontSize: 14},
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          // options={{ tabBarBadge: 3 }}
        />
        {/* options={{header: () => null}} */}
        <Tab.Screen
          name="Wishlist"
          options={{tabBarBadge: 8}}
          component={Wishlist}
        />
        <Tab.Screen name="Frofile" component={Frofile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Home;

// const Home = () => {
//   const cartList = useSelector(cartSelectors.selectAll);
//   const productList = useSelector(productSelectors.selectAll);
//   console.log('🤟💋   Home   cartList', cartList);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchCart();
//     fetchProduct();
//   }, []);

//   const fetchCart = useCallback(async () => {
//     try {
//       // setLoading(true);
//       const res = await getCart();
//       if (res?.data) {
//         dispatch(cartAction.addAll(res?.data));
//       }
//     } catch (error) {
//     } finally {
//       // setLoading(false);
//     }
//   }, []);

//   const fetchProduct = useCallback(async () => {
//     try {
//       const res = await getAllProduct();
//       if (res?.data) {
//         dispatch(productAction.addAll(res?.data));
//       }
//     } catch (error) {
//     } finally {
//     }
//   }, []);

//   const onAddToCart = async item => {
//     try {
//       // const res = await addToCart(item);
//       dispatch(cartAction.addOne(item));
//     } catch (error) {
//       console.log('🤟💋   onAddToCart   error', error);
//     }
//   };

//   const onDeleteCart = async item => {
//     try {
//       // const res = await addToCart(item);
//       dispatch(cartAction.removeOne(item?.id));
//     } catch (error) {
//       console.log('🤟💋   onAddToCart   error', error);
//     }
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Text>List product</Text>
//         {productList?.map(el => {
//           return (
//             <View style={styles.item}>
//               <Text>{el?.name}</Text>
//               <Button title="Add" onPress={() => onAddToCart(el)} />
//             </View>
//           );
//         })}
//         <Text>List cart</Text>
//         {cartList?.map(el => {
//           return (
//             <View style={styles.item}>
//               <Text>{el?.name}</Text>
//               <Button
//                 title="Delete"
//                 color={'red'}
//                 onPress={() => onDeleteCart(el)}
//               />
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   item: {
//     paddingVertical: 20,
//     marginBottom: 10,
//     marginHorizontal: 20,
//     backgroundColor: 'pink',
//   },
// });
