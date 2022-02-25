import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { links } from "./constants/Constants";

function App() {
  const navLinkActiveStyles = ({ isActive }) =>
    isActive
      ? { backgroundColor: "white", color: "black", fontWeight: "600" }
      : {};

  const openLink = (link) => {
    window.open(links[link], "_blank");
  };

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
      <div className="app__footer">
        <IconButton
          onClick={() => {
            openLink("linkedIn");
          }}
        >
          <LinkedIn color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            openLink("github");
          }}
        >
          <GitHub color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            openLink("instagram");
          }}
        >
          <Instagram color="primary" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
