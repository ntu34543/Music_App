import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const wishlist = createEntityAdapter();

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: wishlist.getInitialState(),
  reducers: {
    addAll: wishlist.addMany,
    removeAll: wishlist.removeAll,
    addOne: wishlist.addOne,
    updateOne: wishlist.updateOne,
    removeOne: wishlist.removeOne,
  },
});

export const wishlistSelectors = wishlist.getSelectors(state => state.wishlist);
export const {reducer, actions: wishlistAction} = wishlistSlice;
export default reducer;
