import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../Actions/sideBarSlice';
import projectsReducer from '../Actions/projectsSlice';
import animationReducer from '../Actions/animationSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    projects: projectsReducer,
    animation: animationReducer,
  },
});

export default store;
