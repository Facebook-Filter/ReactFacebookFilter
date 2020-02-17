<<<<<<< HEAD
// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';



// class Nav extends Component{
//   render(){
//     return(
//     <div className="nav-bar">
//         <div className="logo-div">
//           <Link className="logo" to="/"></Link>
//           </div>
//           <Link id="currentlyOn" to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/features">Features</Link>
//           <Link to="/download">Download</Link>
//           <Link to="/contactus">Contact Us</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/faq">FAQ</Link>
//           <Link to="/support">Support</Link>
//           <Link className="donate-button" to="/donate">Donate</Link>
//       </div>
//     )
//   }
// }

// export default Nav;
=======
import React from "react";
import { NavLink, Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import logo from "../images/shortcut-icon.png";
import "./Nav.css";

const Nav = props => (
  <header className="toolbar">
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
  </header>
);

export default Nav;
>>>>>>> d68d35b61436a500e09f216264e391cc0b7a51d6
