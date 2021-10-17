import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { incrementByAmount } from "./counterSlice";
import { RootState } from './store';

type Counter2State = {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}
const initialState: Counter2State = {
  value: 0,
  status: 'idle',
}

// APIの代わりの非同期関数
function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => resolve({ data: amount }), 500)
    //reject({})
  )
}

// fetch処理をcreateAsyncThunkで作成する
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counter2Slice = createSlice({
  name: 'counter2',  // sliceの名前
  initialState,      // sliceの初期値
  reducers: {},      // reducers
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {   // 処理が開始された時(pending)にこちらが呼び出される
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => { // Promiseのresolveが呼び出されたら(fulfilled)この処理が行われる
        state.status = 'idle';
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {  // Promiseのrejectが呼び出されたら(rejected)この処理が行われる
        state.status = 'failed';
      })
  }
})

export const selectCount2 = (state: RootState) => state.counter2.value;
export const selectStatus2 = (state: RootState) => state.counter2.status;

export default counter2Slice.reducer;