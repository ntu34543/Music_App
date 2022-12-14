import {combineReducers} from '@reduxjs/toolkit';
import music from './product/music';
import wishlist from './product/wishlist';
export const allReducers = combineReducers({
  music: music,
  wishlist: wishlist,
});
