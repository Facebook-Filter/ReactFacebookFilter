import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";

const SideDrawer = props => {

    let drawerClasses= 'side-drawer';
    if (props.show){
        drawerClasses= 'side-drawer open'
    }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};
export default SideDrawer;
