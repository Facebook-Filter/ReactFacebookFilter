import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';




class Nav extends Component {

  render() {
    return (
      <header>
        <div className="nav-bar">
          <div className="logo-div"><Link className="logo" to="/"></Link></div>
          <NavLink activeClassName="active" to="/" exact>Home</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <NavLink activeClassName="active" to="/features">Features</NavLink>
          <NavLink activeClassName="active" to="/download">Download</NavLink>
          <NavLink activeClassName="active" to="/contactus">Contact Us</NavLink>
          <NavLink activeClassName="active" to="/blog">Blog</NavLink>
          <NavLink activeClassName="active" to="/faq">FAQ</NavLink>
          <NavLink activeClassName="active" to="/support">Support</NavLink>
          <NavLink activeClassName="active" className="donate-button" to="/donate">Donate</NavLink>
        </div>
      </header>
    )
  }
}

export default Nav;