// components/Counter.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions';

function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
