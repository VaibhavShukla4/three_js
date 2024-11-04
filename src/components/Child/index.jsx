/** @format */

import React, { memo } from 'react';

const Child = React.memo(({ onIncrement }) => {
  console.log('Child rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

export default memo(Child);
