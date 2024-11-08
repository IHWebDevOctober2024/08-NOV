import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink className={({ isActive }) => isActive ? "selected" : "another-class"} to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
/* function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
} */

export default Navbar;
