import Card from "../components/Card";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <div className="cards-container">
        <Card type="card1" content="amazing courses in Barcelona" />
        <Card type="card2" content="amazing courses in Berlin" />
        <Card type="card3" content="amazing courses in Paris" />
      </div>
    </>
  );
}

export default HomePage;
