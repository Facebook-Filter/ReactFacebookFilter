import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component{


  handleLogout() {
		localStorage.removeItem('token');
		window.location.reload();
	}
  render()
  {return(
    <nav>
    <header>
      <span />
      Gaby Karam
      <a onClick={() => this.handleLogout()}/>
    </header>
    <ul>
      <li><span>Dashboard</span></li>
      <li><Link to='/admin/feature' className="active">Features</Link></li>
      <li><Link to='/admin/blog' className="active">Blog</Link></li>
      <li><Link to='/admin/faq' className="active">FAQ</Link></li>
      <li><Link to='/admin/support' className="active">Support</Link></li>
      <li><Link to='/admin/review' className="active">Admin Review</Link></li>
      <li><Link to='/admin/clientreview' className="active">Client Review</Link></li>
      <li><Link to='/admin/contactus' className="active">Contact Us</Link></li>
    </ul>
    </nav>
);
}}
export default Nav;


