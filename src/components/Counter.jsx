import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

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
  const count2Up = () => {
    // It work click a lot same time
    setTimeout(
      () =>
        // simple Arrow function
        // setCount((prevState) => prevState + 1)
        // same as Arrow function
        setCount2((prevState) => {
          // "prevState" is before update state prevStateは更新前のstate
          return prevState + 1;
        }),
      1000
    );
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  const count2Down = () => {
    setCount2((prevState) => prevState - 1);
  };
  // Lifecycle are Mounting, Updating, Unmounting
  // Mounting: set up first component, initialization 初期化 > rendering > after mounting function
  // Updating: rendering > update component
  // Unmounting: when destroy component before something do function
  //
  // useEffect has side effect, 副作用
  // useEffect is has something rendering do function
  // useEffectはレンダリングされる度に発動する
  // レンダリングされる度 = return の中身が実行される度
  // useEffectは関数を渡す
  //
  // Runs every time
  // useEffect(() => {
  //   console.log('Current count is ', count);
  // });

  // Runs only first time
  // useEffect(() => {
  //   console.log('Current count is ', count);
  // }, []);

  // Runs 2nd argument [count]引数 update
  useEffect(() => {
    console.log('Current count is ', count);
  }, [count]);

  // Runs 2nd argument [count, count2]引数 update
  // useEffect(() => {
  //   console.log('Current count is ', count2);
  // }, [count, count2]);
  // count, count2の両方で実行する場合は、Runs every timeにする
  return (
    <div>
      <p>
        good counter
        <br />
        count number: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      <p>
        good counter
        <br />
        count2 number: {count2}
      </p>
      <button onClick={count2Up}>up</button>
      <button onClick={count2Down}>down</button>
    </div>
  );
};

export default Counter;
