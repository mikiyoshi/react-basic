import { useState } from 'react';
import { Content, PublishButton, Title } from './index';
// if we don't use index.js, we import each of it
// import Content from './Content'
// import Title from './Title'

const Article = (props) => {
  // useSate sample
  // const [state, setState] = useState(initialState)
  // state = current value
  // setState = update function
  // initialState = initial value
  // setState(newState)
  // setState = update function
  // newState = new value
  //
  // example
  // const [message, setMessage] = useState('Hello world')
  // const [like, setLike] = useState(0)
  // const [isPublished, setIsPublished] = useState(false)
  // setIsPublished(true)
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);
  // don't "setIsPublished" in onClick function, create new function with "setIsPublished" and add onClick function in new function
  const publishArticle = () => {
    setIsPublished(true);
  };
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      {/* <button onClick={() => setIsPublished(true)}>Published</button> */}
      <PublishButton
        isPublished={isPublished}
        // pass to function is OK
        onClick={publishArticle}
        // pass to callback is OK
        // onClick={() => publishArticle()}
        // pass to function and mplementation 実行 is error as infinite roop
        // onClick={publishArticle()}
      />
    </div>
  );
};

export default Article;
