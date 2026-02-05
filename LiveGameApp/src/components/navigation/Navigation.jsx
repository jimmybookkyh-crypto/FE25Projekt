import "./Navigation.css";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => (isActive ? "active" : "");

function Navigation(){
    return (
     <nav>
      <NavLink to="/" end className={linkClass}>Home</NavLink>
            <br/>
      <NavLink to="/live" end className={linkClass}>Latest Live Games</NavLink>
            <br/>
      <NavLink to="/search" end className={linkClass}>Search Games</NavLink>
            <br/>
      <NavLink to="/about" end className={linkClass}>About</NavLink>
    </nav>
    );
}

export default Navigation;