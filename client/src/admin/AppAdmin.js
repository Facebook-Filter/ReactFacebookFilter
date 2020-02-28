import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './Login/Login.js';
import FeatureAdmin from './Dashboard/FeatureAdmin';
import NavAdmin from './Dashboard/NavAdmin';
import BlogAdmin from './Dashboard/BlogAdmin';
import SupportAdmin from './Dashboard/SupportAdmin';
import ContactAdmin from './Dashboard/ContactAdmin';
import ReviewAdmin from './Dashboard/ReviewAdmin';
import FaqAdmin from './Dashboard/FaqAdmin';
import ClientReviewForm from "./Dashboard/ClientReviewForm";

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
                        <Switch>
                           
                       
                        <Route path='/admin'>
                        <NavAdmin/>
                        <Route path="/admin/feature" component={FeatureAdmin} />
                        <Route path="/admin/blog" component={BlogAdmin} />
                        <Route path="/admin/faq" component={FaqAdmin} />
                        <Route path="/admin/support" component={SupportAdmin} />
                        <Route path="/admin/review" component={ReviewAdmin} />
                        <Route path="/admin/clientreview" component={ClientReviewForm} />
                        <Route path="/admin/contactus" component={ContactAdmin} />
                        </Route>
                        </Switch>
					) : <Route path="/admin" component={Login} />
				}
			</>
		)
	}
}

export default Appadmin;