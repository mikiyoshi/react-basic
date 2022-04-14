import React, { useState } from 'react';

const TextInput = () => {
  const [name, setName] = useState('');

  const handleName = (event) => {
    // (event.target.value) = value={name} is argument 引数
    // this console update when text input in form
    console.log('current: ', event.target.value);
    setName(event.target.value);
  };

  return (
    <input
      // (event) = onChange event の戻り値
      onChange={(event) => handleName(event)}
      type={'text'}
      // value = argument 引数
      value={name}
    />
  );
};

export default TextInput;
