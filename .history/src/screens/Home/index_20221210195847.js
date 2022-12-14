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
import 
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
            if (route.name === 'Feed') {
              iconName = 'home';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Wishlist') {
              iconName = 'plus-square';
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === 'Frofile') {
              iconName = 'user';
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
          // options={{tabBarBadge: 8}}
          component={Wishlist}
        />
        <Tab.Screen name="Frofile" component={Frofile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Home;
