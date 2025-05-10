import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Infer the type of the todos slice state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
