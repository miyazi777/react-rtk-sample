import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { selectCount, increment, decrement, incrementByAmount } from './counterSlice';
import { selectStatus } from './statusSlice';

function App() {
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch();

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>+++3</button>
      <div>{status}</div>
    </div>
  );
}

export default App;

