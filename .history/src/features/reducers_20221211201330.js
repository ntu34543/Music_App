import {combineReducers} from '@reduxjs/toolkit';
import cart from './music/cart';
import product from './music/product';
import music from './music/music';
import wishlist from './music/wishlist';
export const allReducers = combineReducers({
  cart: cart,
  product: product,
  music: music,
  wishlist: wishlist,
});
