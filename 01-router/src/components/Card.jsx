import "./Card.css";

function Card(props) {
  return (
    <div className={props.type}>
      <h4>Title</h4>
      <p>{props.content}</p>
      <button>Go there</button>
    </div>
  );
}

export default Card;
