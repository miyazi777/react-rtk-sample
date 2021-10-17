import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import counter2Reducer from './counter2Slice'
import statusReducer from './statusSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    status: statusReducer,
    counter2: counter2Reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;