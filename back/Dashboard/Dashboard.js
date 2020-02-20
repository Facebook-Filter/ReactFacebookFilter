import React, { Component } from "react";


class Dashboard extends Component {

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li onClick={() => this.goToUsers()}>users</li>
						<li onclick-={() => this.goToSupport()}>support</li>
                        <li onclick-={() => this.goToFaq()}>FAQ</li>
                        <li onclick-={() => this.goToBlog()}>blog</li>                       
                        <li onclick-={() => this.goToFeatures()}>features</li>
						<li onclick-={() => this.goToReview()}>reviews</li>
                        <Link to={<Faqs/>}>Faq</Link>
					</ul>
				</nav>
				<form>
					<h2>{this.props.h2}</h2>
				</form>

				<form></form>
			</div>
		);
	}
}

export default Dashboard;




