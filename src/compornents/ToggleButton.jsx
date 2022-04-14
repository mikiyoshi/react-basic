import React, { useState } from 'react';

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    // open is true or false reversing process 反転する処理
    // "prevState" is before update state prevStateは更新前のstate
    setOpen((prevState) => !prevState);
  };

  return (
    <button onClick={toggle}>
      {/* if open is true "OPEN", false is "CLOSE" */}
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  );
};

export default ToggleButton;
