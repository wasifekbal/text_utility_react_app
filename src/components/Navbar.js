import React from "react";
import PropTypes from 'prop-types'

function Navbar(proto) {

  const notMode = (mode) => {
    if(mode === 'light'){
      return "dark"
    }
    else{
      return "light";
    }
  }

  return (
    <>
    <nav className={`navbar navbar-expand-md navbar-dark bg-${proto.mode} border-bottom`}>
      <div className={`container-fluid text-${notMode(proto.mode)}`}>
        <a className={`navbar-brand fs-3 mx-4 text-${proto.mode==="light"?"dark":"pink"}`} href="/">
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
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${proto.mode==="light"?"dark":"pink"}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${proto.mode==="light"?"dark":"pink"}`} aria-current="page" href="/">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input type="checkbox" class="btn-check" id="btn-check-outlined" onClick={proto.togglemode} autocomplete="off" />
            <label className={`btn btn-${notMode(proto.mode)}`} htmlFor="btn-check-outlined">{proto.mode==="light"?"Dark":"Light"} Mode</label>
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
