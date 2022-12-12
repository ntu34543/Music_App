import {combineReducers} from '@reduxjs/toolkit';
import product from './product/product';
import music from './product/music';
import wishlist from './product/wishlist';
export const allReducers = combineReducers({
  product: product,
  music: music,
  wishlist: wishlist,
});
