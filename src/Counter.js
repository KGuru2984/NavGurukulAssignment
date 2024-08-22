import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const [input, setInput] = useState('');
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
