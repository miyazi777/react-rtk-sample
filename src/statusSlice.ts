import { createSlice } from "@reduxjs/toolkit"
import { RootState } from './store';
import { increment, decrement } from './counterSlice';

type StatusState = {
  status: string;
}
const initialState: StatusState = {
  status: 'initial',
}

export const statusSlice = createSlice({
  name: 'status',   // sliceの名前
  initialState,     // sliceの初期値
  reducers: {},     // reducers
  extraReducers: (builder) => {             // 外部の関数に対してstateを変更した場合にこちらを使用する 
    builder.addCase(increment, (state) => { // counterSliceのincrement呼び出しに応じてstatusを変更する
      state.status= 'increment';
    })
    builder.addCase(decrement, (state) => { // counterSliceのdecrement呼び出しに応じてstatusを変更する
      state.status = 'decrement';
    })
  }
})

export const selectStatus = (state: RootState) => state.status.status;

export default statusSlice.reducer;