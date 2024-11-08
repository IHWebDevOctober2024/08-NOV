import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        {/* A page for the title of the app and the description */}
        <Route path="/" element={<HomePage />} />
        {/* A page for the list of users */}
        <Route path="/users" element={<UsersPage isLoggedIn={isLoggedIn} />} />
        {/* A page for the about */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/error" element={<ErrorPage isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<ErrorPage isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
