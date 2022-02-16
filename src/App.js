import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {

  const navLinkClassName = ({isActive}) => (isActive? "app__link app__link--active" : "app__link");

  return (
    <div className="app">
      <nav className="app__navbar">
        <NavLink to="/home" className={navLinkClassName} >Home</NavLink>
        <NavLink to="/languages" className={navLinkClassName} >Languages</NavLink>
        <NavLink to="/education" className={navLinkClassName} >Education</NavLink>
        <NavLink to="/employment" className={navLinkClassName} >Employment</NavLink>
        <NavLink to="/projects" className={navLinkClassName} >Projects</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
