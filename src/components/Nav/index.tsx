import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  return (
    <nav>
      <NavLink activeClassName="active-page" className="nav-item" to="/" end>
        home
      </NavLink>
      <NavLink activeClassName="active-page" className="nav-item" to="users">
        users
      </NavLink>
      <NavLink activeClassName="active-page" className="nav-item" to="posts">
        posts
      </NavLink>
    </nav>
  );
};

export default Nav;
