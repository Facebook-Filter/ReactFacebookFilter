import React, { Component } from "react";


class Dashboard extends Component {
    constructor(props){
        super(props)
            this.state ={
                username: "",
                password:"",
                title:"",
				image:"",
				h2:"users",
				
            }
    }


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
					</ul>
				</nav>
				<form>
					<h2>{this.props.h2}</h2>
                    <input type="button" value="Edit" onClick></input>
                    <input type="button" value="Delete"></input>
				</form>

				<form>
                    <h2></h2>
                </form>
			</div>
		);
	}
}

export default Dashboard;




