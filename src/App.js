import './App.css';
import {
  Article,
  TextInput,
  Counter,
  BadCounter,
  ToggleButton,
} from './compornents';
// why we use props and state, we don't use DOM instead of props and state
//
// props: argument 引数
// state: value inside compornents コンポーネント内で宣言、制御される値
// props can't edit inside compornents
// if u want to edit props, u can edit original props 親から受け取ったpropsは更新できないけど、親自身が更新することは可能
// state pass to props can edit stateをpropsに渡す（stateは更新可能なので、porpsの代わりにstateをpropsとして扱う）
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
  return (
    <div>
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
