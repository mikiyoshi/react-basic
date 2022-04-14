import React, { useEffect, useState } from 'react';

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    // open is true or false reversing process 反転する処理
    // "prevState" is before update state prevStateは更新前のstate
    setOpen((prevState) => !prevState);
  };
  useEffect(() => {
    // first time priority 1
    // 2nd time priority 2
    console.log('Current state is ', open);
    // first time priority 3
    // 2nd time priority 3
    if (open) {
      console.log('Subscribe database...');
    }
    // first time priority 2
    // 2nd time priority 1
    // This is clean up function
    // rerendering this is first priority function
    // 再レンダリングされる度に最初に実行される
    return () => {
      console.log('Unsubscribe database!');
    };
  });
  return (
    <button onClick={toggle}>
      {/* if open is true "OPEN", false is "CLOSE" */}
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  );
};

export default ToggleButton;
