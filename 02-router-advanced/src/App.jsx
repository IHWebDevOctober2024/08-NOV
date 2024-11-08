import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CoursePage from "./pages/CoursePage";
import coursesArray from "./data/courses.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        {/* A page for the title of the app and the description */}
        <Route path="/" element={<HomePage coursesArray={coursesArray} />} />
        {/* A page for the list of users */}
        <Route path="/users" element={<UsersPage isLoggedIn={isLoggedIn} />} />
        {/* A page for the about */}
        <Route path="/about" element={<AboutPage />} />
        {/*in the path, everything after the colon is called PARAMETERS*/}
        <Route
          //path="/course/:courseId"
          path="/course/:courseId/:type" // in case we want to add more than one parameter
          element={<CoursePage coursesArray={coursesArray} />}
        />
        <Route path="/error" element={<ErrorPage isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<ErrorPage isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
