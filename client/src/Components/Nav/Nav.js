import React from "react";
import { NavLink, Link } from "react-router-dom";
// import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import "./Nav.css";


const Nav = props => (
  
  /*<header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/download">
              Download
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contactus">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/support">
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="donate-button"
              to="/donate"
            >
              Donate
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header> */


  <header className="navbar-header">
    <section className="section-nav">
      <Link to="/" id="logo" target="_blank">Social-fixer</Link>
      <label htmlFor="toggle-1" className="toggle-menu"><ul><li /> <li /> <li /></ul></label>
      <input type="checkbox" id="toggle-1" />
      <nav className="navbar-menu">
        <ul>
          <li><NavLink activeClassName="nav-bar" to="/" exact>Home</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/features">Features</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/download">Download</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/contactus">Contact Us</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/blog">Blog</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/faq">FAQ</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/support">Support</NavLink></li>
          <li><NavLink activeClassName="nav-bar" to="/donate">Donate</NavLink></li>
        </ul>
      </nav>
    </section>
  </header>



);

export default Nav;
