import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import "./AppAdmin.css";
import Login from './Login/Login.js';

class Appadmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}

	async componentDidMount() {
		const response = await fetch(`http://localhost:5000/verify?token=${localStorage.getItem('token')}`);
		const result = await response.json();
		if (result.status === 200) {
			this.setState({
				loggedIn: true
			})
		}
	}

	render() {
		return (
			<>
				{
					this.state.loggedIn ? (
						<Route path="/admin" strict exact component={Dashboard} />

					) : <Route path="/admin" component={Login} />
				}
			</>
		)
	}
}

export default Appadmin;
