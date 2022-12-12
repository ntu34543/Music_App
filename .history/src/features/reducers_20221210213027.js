import {combineReducers} from '@reduxjs/toolkit';
import cart from './product/cart';
import product from './product/product';
import music from './product/music';
import wishlish from ''
export const allReducers = combineReducers({
  cart: cart,
  product: product,
  music: music,
  wishlist: wishlist,
});
