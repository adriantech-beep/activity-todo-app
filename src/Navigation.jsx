import { NavLink } from "react-router-dom";
import Logo from "./components/Logo";

function Navigation() {
  return (
    <nav className="nav-container">
      <Logo />
      <ul className="nav-items">
        <li>
          <NavLink to="/" className="nav-links">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/pending" className="nav-links">
            Pending
          </NavLink>
        </li>
        <li>
          <NavLink to="/done" className="nav-links">
            Done
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
