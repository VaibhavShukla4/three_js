/** @format */

import React, { memo } from 'react';

const TextInput = ({ text, onTextChange }) => {
  console.log('TextInput rendered');
  return (
    <>
      <input type="text" value={text} onChange={(e) => onTextChange(e)} />
      <span>hello</span>
    </>
  );
};

export default memo(TextInput);
