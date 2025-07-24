import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../actions/sideBarSlice';
import projectsReducer from '../actions/projectsSlice';
import animationReducer from '../actions/animationSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    projects: projectsReducer,
    animation: animationReducer,
  },
});

export default store;
