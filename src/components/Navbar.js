import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


function Navbar(proto) {

  const notMode = (mode) => {
    if (mode === 'light') {
      return "dark"
    }
    else {
      return "light";
    }
  }

  return (
    <>
      <nav className={`navbar navbar-expand-md navbar-dark border-bottom`}
        style={proto.mode === "dark" ? { backgroundColor: "#261f1c" } : { backgroundColor: "rgb(248,249,250)" }}
      >
        <div className={`container-fluid text-${notMode(proto.mode)}`} style={{ margin: "0 1rem" }}>
          <Link className={`navbar-brand fs-3 mx-4 text-${proto.mode === "light" ? "dark" : "pink"}`} to="/">
            <h1 style={{ margin: "0" }}>{proto.title}</h1>
          </Link>
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
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-lg-0" style={{ margin: "0 auto", columnGap: "1.2rem", fontSize: "1.2rem" }}>
              <li className="nav-item">
                <Link className={`nav-link text-${proto.mode === "light" ? "dark" : "pink"}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${proto.mode === "light" ? "dark" : "pink"}`} aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${proto.mode === "light" ? "dark" : "pink"}`} aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch" style={{ paddingLeft: "4rem", paddingRight: "1rem" }}>
              <input type="checkbox" className="btn-check" id="btn-check-outlined" onClick={proto.togglemode} autoComplete="off" />
              <label className={`btn btn-${notMode(proto.mode)}`} htmlFor="btn-check-outlined">{proto.mode === "light" ? "Dark" : "Light"} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Title here"
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
