import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from './store';

type Counter2State = {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}
const initialState: Counter2State = {
  value: 0,
  status: 'idle',
}

// APIの代わり
function fetchCount(amount = 1) {
  return new Promise<{ data: number }>(resolve =>
    setTimeout(() => resolve({ data: amount }), 500)
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
      .addCase(incrementAsync.pending, (state) => {   // 処理が開始された時にこちらが呼び出される
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => { // Promiseのresolveが呼び出されたらこの処理が行われる
        state.status = 'idle';
        state.value += action.payload
      });
  }
})

export const selectCount2 = (state: RootState) => state.counter2.value;
export const selectStatus2 = (state: RootState) => state.counter2.status;

export default counter2Slice.reducer;