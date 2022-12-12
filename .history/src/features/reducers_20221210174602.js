import {combineReducers} from '@reduxjs/toolkit';
import cart from './product/cart';
import product from './product/product';
import music from ''
export const allReducers = combineReducers({
  cart: cart,
  product: product,
  music: music,
});
