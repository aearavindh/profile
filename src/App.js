import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const navLinkActiveStyles = ({ isActive }) =>
    isActive
      ? { backgroundColor: "white", color: "black", fontWeight: "600" }
      : {};

  return (
    <div className="app">
      <nav className="app__navbar">
        <NavLink to="/home" style={navLinkActiveStyles} className="app__link">
          Home
        </NavLink>
        <NavLink
          to="/languages"
          style={navLinkActiveStyles}
          className="app__link"
        >
          Languages
        </NavLink>
        <NavLink
          to="/education"
          style={navLinkActiveStyles}
          className="app__link"
        >
          Education
        </NavLink>
        <NavLink
          to="/employment"
          style={navLinkActiveStyles}
          className="app__link"
        >
          Employment
        </NavLink>
        <NavLink
          to="/projects"
          style={navLinkActiveStyles}
          className="app__link"
        >
          Projects
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
