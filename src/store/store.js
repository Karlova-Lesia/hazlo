import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
    },
    preloadedState: JSON.parse(localStorage.getItem('state')) || {},
  },
);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

export default store;
