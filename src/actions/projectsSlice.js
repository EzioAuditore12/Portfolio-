import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: ''
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setSearchQuery } = projectsSlice.actions;
export default projectsSlice.reducer;
