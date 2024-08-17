import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header__nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-header__nav-link-about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
