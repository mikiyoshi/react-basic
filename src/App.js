import './App.css';
import {
  Article,
  TextInput,
  Counter,
  BadCounter,
  ToggleButton,
} from './components';
import React, { useEffect, useState } from 'react';
// why we use props and state, we don't use DOM instead of props and state
//
// props: argument 引数
// state: value inside components コンポーネント内で宣言、制御される値
// props can't edit inside components
// if u want to edit props, u can edit original props 親から受け取ったpropsは更新できないけど、親自身が更新することは可能
// state pass to props can edit stateをpropsに渡す（stateは更新可能なので、propsの代わりにstateをpropsとして扱う）
//
//
// const Article = (props) => {
//   return (
//     <div>
//       title: {props.title} / content: {props.content}
//     </div>
//   );
// };

// Arrow function default export
// const Article = (props) => {
//   return (
//     <div>
//       title: {props.title} / content: {props.content}
//     </div>
//   );
// };
// export default Article;
//
// default export with name function / 名前なし export(関数名あり)
// export default function Article(props) => {
//   return (
//     <div>
//       title: {props.title} / content: {props.content}
//     </div>
//   );
// };
//
// 名前付きexport
// export const Article = (props) => {
//   return (
//     <div>
//       title: {props.title} / content: {props.content}
//     </div>
//   );
// };
//
// export {default as Article} from './Article'
function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('mikiyoshi');
  const ids = ['mikiyoshi', 'deatiger', 'aws', 'google', 'facebook'];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    // [id, setId] update, id is random
    setId(_id);
  };
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      // this data is Object
      .then((data) => {
        console.log(data);
        // [name, setName] update
        setName(data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      <p>
        {/* {id} from [id, setId], {name} from [name, setName] */}
        {/* when page reload {name} is blank, cos useEffect takes time to get from API */}
        {/* 初回{name}が表示されないのは、useEffectのAPIデータ受け取りまでに時間がかかるから */}
        {id} is Github {name}
      </p>
      {/* this button onClick update random [id, setId] */}
      <button onClick={getRandomId}>Update Id</button>
      <Article
        title={'this is props title'}
        content={'this is props content'}
      />
      <TextInput />
      <Counter />
      <BadCounter />
      <ToggleButton />
      {/* <Article
        title={'this is props title'}
        content={'this is props content'}
      />
      <Article
        title={'this is props title2'}
        content={'this is props content2'}
      />
      <Article
        title={'this is props title3'}
        content={'this is props content3'}
      /> */}
    </div>
  );
}

export default App;
