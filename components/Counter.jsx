// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear, onAddBy }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}>Clear</button>
    <button onClick={onAddBy}>+5</button>
       
  </div>
);



export default Counter;
