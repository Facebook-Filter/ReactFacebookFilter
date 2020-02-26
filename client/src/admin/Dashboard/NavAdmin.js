import React from "react";
import { Link } from "react-router-dom";
// import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";



const Nav = props => (
    <nav>
    <header>
      <span />
      Gaby Karam
      <a />
    </header>
    <ul>
      <li><span>Dashboard</span></li>
      <li><Link to='/admin/feature' className="active">Features</Link></li>
      <li><Link to='/admin/blog' className="active">Blog</Link></li>
      <li><Link to='/admin/faq' className="active">FAQ</Link></li>
      <li><Link to='/admin/support' className="active">Support</Link></li>
      <li><Link to='/admin/review' className="active">Review</Link></li>
      <li><Link to='/admin/contactus' className="active">Contact Us</Link></li>
      {/* <li><a>Roadmap</a></li>
      <li><a>Milestones</a></li>
      <li><a>Tickets</a></li>
      <li><a>GitHub</a></li>
      <li><a>FAQ</a></li>
      <li><span>Other</span></li>
      <li><a>Search</a></li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li> */}
    </ul>
    </nav>
 

);

export default Nav;


