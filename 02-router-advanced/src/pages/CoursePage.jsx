import { useParams } from "react-router-dom";
import "./CoursePage.css";

function CoursePage({ coursesArray }) {
  //   console.log(useParams());

  const params = useParams();

  console.log("This is the ID: ", params);
  console.log("This is the coursesAray props", coursesArray);

  const courseThatIWant = coursesArray.find(
    (eachCourse) => eachCourse._id === params.courseId
  );

  console.log("COURSE THAT WE WANT: ", courseThatIWant);
  const { city, description, courses } = courseThatIWant;
  return (
    <div className={`course-container ${params.type}`}>
      <h2>{city}</h2>
      <p>{description}</p>
      <ul className="course-ul">
        {courses.map((course) => {
          return (
            <li className="course-list">
              <div>
                <h5>{course.name}</h5>
                <p>Teacher: {course.teacher}</p>
                <p>Manager: {course.manager}</p>
                <p>Dog: {course.dog}</p>
              </div>
              <button>Join</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CoursePage;
