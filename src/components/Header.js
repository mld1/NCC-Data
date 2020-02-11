import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light purple justify-content-between">
        <a className="navbar-brand whiteText">
          <h2 className="whiteText">NCC Data Analysis</h2>
        </a>
      </nav>
    );
  }
}

export default Header;
