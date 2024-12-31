import { createSlice } from '@reduxjs/toolkit';

const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    hasPlayed: localStorage.getItem('animationsPlayed') === 'true'
  },
  reducers: {
    setAnimationsPlayed: (state) => {
      state.hasPlayed = true;
      localStorage.setItem('animationsPlayed', 'true');
    }
  }
});

export const { setAnimationsPlayed } = animationSlice.actions;
export default animationSlice.reducer;