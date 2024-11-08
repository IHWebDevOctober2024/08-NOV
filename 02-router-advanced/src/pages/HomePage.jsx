import Card from "../components/Card";
import "./HomePage.css";

function HomePage(props) {
  const coursesArray = props.coursesArray;

  return (
    <>
      <h1>Home page</h1>
      <div className="cards-container">
        {coursesArray.map((eachCourse, index) => {
          // I have 3 classes in css
          // I don't want to create a class in css for each card
          // in the array every 3 cards -> type="card1"

          return (
            <Card
              key={eachCourse._id}
              type={`card${(index % 3) + 1}`}
              title={eachCourse.city}
              content={eachCourse.description}
              courseId={eachCourse._id}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
