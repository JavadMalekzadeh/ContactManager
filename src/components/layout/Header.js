import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <div className="fa fa-home">Home</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact/Add" className="nav-link">
              <div className="fa fa-plus">Add</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              <div className="fa fa-vcard-o">About</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Not Determined"
};
Header.prototype = {
  branding: PropsTypes.string.isRequired
};

export default Header;
