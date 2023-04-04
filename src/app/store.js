import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';

//store
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
