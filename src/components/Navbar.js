import React from "react";
import PropTypes from 'prop-types'

function Navbar(proto) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {proto.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success text-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : "Title here"
};

export default Navbar;














/*
 <nav className="navbar">
        <h3>
          <a href="/">{proto.title}</a>
        </h3>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
        </ul>
        <form>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </nav>
 */
