import './App.css';

const Article = (props) => {
  return (
    <div>
      title: {props.title} / content: {props.content}
    </div>
  );
};

function App() {
  return (
    <div>
      <Article
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
      />
    </div>
  );
}

export default App;
