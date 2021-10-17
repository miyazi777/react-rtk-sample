import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { selectCount, increment, decrement, incrementByAmount } from './counterSlice';
import { selectStatus } from './statusSlice';
import { selectCount2, selectStatus2, incrementAsync } from './counter2Slice';

function App() {
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch();

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const count2 = useAppSelector(selectCount2);
  const status2 = useAppSelector(selectStatus2);
  
  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>+++3</button>
      <div>---------------------------------------------------</div>
      <div>{status}</div>
      <div>---------------------------------------------------</div>
      <div>count2: {count2}</div>
      <div>status2: {status2}</div>
      <button onClick={() => dispatch(incrementAsync(5))}>+++5(async)</button>
    </div>
  );
}

export default App;

