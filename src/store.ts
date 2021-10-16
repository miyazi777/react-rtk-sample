import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import statusReducer from './statusSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    status: statusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;