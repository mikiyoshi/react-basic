import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    // It work click a lot same time
    setTimeout(
      () =>
        // simple Arrow function
        // setCount((prevState) => prevState + 1)
        // same as Arrow function
        setCount((prevState) => {
          // "prevState" is before update state prevStateは更新前のstate
          return prevState + 1;
        }),
      1000
    );
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <p>
        good counter
        <br />
        count number: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default Counter;
