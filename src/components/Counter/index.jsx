/** @format */

import React from 'react';
import Child from './../Child/index';
import { memo } from 'react';
const Counter = ({ count, onIncrement }) => {
  console.log('Counter rendered');
  return (
    <>
      <Child onIncrement={onIncrement} />
      <p>Count: {count}</p>
    </>
  );
};

export default memo(Counter);
