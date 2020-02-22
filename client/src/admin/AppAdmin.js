import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import "./AppAdmin.css";
import Login from './Login/Login.js';

class Appadmin extends Component {
	render() {
		return (
			<> 
		<Route path="/admin"  exact component={Login} />
		<Route path="/admin/Dashboard" strict exact component={Dashboard} /> 
		</>
		)
	}
}

export default Appadmin;
