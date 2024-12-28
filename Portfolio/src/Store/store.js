import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../Actions/sideBarSlice';
import projectsReducer from '../Actions/projectsSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    projects: projectsReducer,
  },
});

export default store;
