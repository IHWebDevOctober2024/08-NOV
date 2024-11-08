import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className={props.type}>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <Link to={`/course/${props.courseId}/${props.type}`}>
        <button>Go there</button>
      </Link>
    </div>
  );
}

export default Card;
