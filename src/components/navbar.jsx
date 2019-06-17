import React from "react";

const NavBar = props => {
    console.log('NavBar_Rendered')
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#sri">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
