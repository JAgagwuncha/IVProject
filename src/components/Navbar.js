import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
          

            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              2019
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Corruption2018"
            >
              2018
            </NavLink>

            

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Corruption2017"
            >
              2017
            </NavLink>

           

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Corruption2016"
            >
              2016
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Corruption2015"
            >
              2015
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Difference1819"
            >
              2018-19
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Difference1718"
            >
              2017-18
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Difference1617"
            >
              2016-17
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/Difference1516"
            >
              2015-16
            </NavLink>
            
          </div>

          <div className="navbar-end">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;