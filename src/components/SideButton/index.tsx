import "./style.css";

import { Link } from "react-router-dom";

export const SideButton = () => {
  return (
    <nav className="col-2 sidebutton justify-content-center">
      <Link to="/" className="button-options button-sideButton" aria-label="About">
        <span className="material-symbols-outlined bigger-icon">
          account_circle
        </span>
        <span>Profile</span>
      </Link>
      <Link to="/project" className="button-options button-sideButton" aria-label="Project">
        <span className="material-symbols-outlined bigger-icon">view_list</span>
        <span>Projects</span>
      </Link>
      <Link to="/works" className="button-options button-sideButton" aria-label="Works">
        <span className="material-symbols-outlined bigger-icon">work</span>
        <span>Works</span>
      </Link>
    </nav>
  );
};
