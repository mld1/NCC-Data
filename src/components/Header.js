import React from "react";
import "./header.css";

class Header extends React.Component {
  state = {
    data: []
  };

  // admins = require("./data/threatData.json");

  render() {
    return (
      <nav className="navbar navbar-light purple justify-content-between">
        <a className="navbar-brand whiteText">
          <h2 className="whiteText">NCC Data Analysis</h2>
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0 search searchButton"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;
