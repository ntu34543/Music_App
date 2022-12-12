import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const music = createEntityAdapter();

const musicSlice = createSlice({
  name: 'music',
  initialState: music.getInitialState(),
  reducers: {
    addAll: music.addMany,
    removeAll: music.removeAll,
    addOne: music.addOne,
    updateOne: music.updateOne,
    removeOne: music.removeOne,
  },
});

export const musicSelectors = music.getSelectors(state => state.music);
export const {reducer, actions: musicAction} = musicSlice;
export default reducer;
