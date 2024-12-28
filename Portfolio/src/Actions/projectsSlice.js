import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    // Add your project data here
    { id: 1, title: 'Project 1', description: 'Description 1', tags: ['React', 'Redux'] },
    { id: 2, title: 'Project 2', description: 'Description 2', tags: ['Node', 'Express'] },
    
  ],
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
