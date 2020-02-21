import React from "react";
import { NavLink, Link } from "react-router-dom";
// import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import "./Nav.css";


const Nav = props => (
  <div className="nav">
    <label htmlFor="toggle">☰</label>
    <input type="checkbox" id="toggle" />
    <div className="menu">
      <NavLink activeClassName="nav-bar" to="/" exact>Home</NavLink>
      <NavLink activeClassName="nav-bar" to="/about">About</NavLink>
      <NavLink activeClassName="nav-bar" to="/features">Features</NavLink>
      <NavLink activeClassName="nav-bar" to="/download">Download</NavLink>
      <NavLink activeClassName="nav-bar" to="/contactus">Contact Us</NavLink>
      <NavLink activeClassName="nav-bar" to="/blog">Blog</NavLink>
      <NavLink activeClassName="nav-bar" to="/faq">FAQ</NavLink>
      <NavLink activeClassName="nav-bar" to="/support">Support</NavLink>
      <NavLink activeClassName="nav-bar" to="/donate"><button class= "donate">Donate</button></NavLink>
    </div>
  </div>



);

export default Nav;
