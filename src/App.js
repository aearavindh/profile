import {
  GitHub,
  Home,
  Instagram,
  Language,
  LinkedIn,
  School,
  Work,
  Workspaces,
} from "@mui/icons-material";
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
          <Home />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/languages"
          style={navLinkActiveStyles}
          className="app__link"
        >
          <Language />
          <p>Languages</p>
        </NavLink>
        <NavLink
          to="/education"
          style={navLinkActiveStyles}
          className="app__link"
        >
          <School />
          <p>Education</p>
        </NavLink>
        <NavLink
          to="/employment"
          style={navLinkActiveStyles}
          className="app__link"
        >
          <Work />
          <p>Employment</p>
        </NavLink>
        <NavLink
          to="/projects"
          style={navLinkActiveStyles}
          className="app__link"
        >
          <Workspaces />
          <p>Projects</p>
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
