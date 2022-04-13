const PublishButton = (props) => {
  return (
    <button onClick={() => props.onClick()}>
      Published: {props.isPublished.toString()}
    </button>
  );
};
export default PublishButton;
