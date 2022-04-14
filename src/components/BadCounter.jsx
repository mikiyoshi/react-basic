import React, { useState } from 'react';

const BadCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    // it is not live update when click a lot same time
    // "count" is state, so it's not "prevState更新前のstate"
    // "count"はstateなので、1秒経つ前にクリックされると、更新データを受け取れない
    setTimeout(() => setCount(count + 1), 1000);
  };

  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>
        bad counter
        <br />
        bad count number: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default BadCounter;
