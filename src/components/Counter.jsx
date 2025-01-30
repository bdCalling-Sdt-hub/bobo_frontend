"use client";
import { decrement, increment, reset } from "@/redux/features/CounterSlice";
// import {
//   decrement,
//   increment,
//   reset,
// } from "@/redux/features/counter/CounterSlice";

import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((sate) => sate.counter);
  const dispatchh = useDispatch();

  return (
    <div>
      <button onClick={() => dispatchh(increment())}>incriemnt</button>
      <h1>{count}</h1>
      <button onClick={() => dispatchh(decrement())}>Decriemnt</button> <br />
      <button onClick={() => dispatchh(reset())}>reset</button>
    </div>
  );
};

export default Counter;
