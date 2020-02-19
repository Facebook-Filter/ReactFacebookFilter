import React, { Component } from "react";

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	username = e => {
		this.setState({ username: e.target.value });
	};

	password = e => {
		this.setState({ password: e.target.value });
	};

	signIn = () => {


	}
	render() {
		return (
			<div>
				<form
					onSubmit={event => {
						event.preventDefault();
					}}
				>
					<input
						type="text"
						placeholder="Enter Admin name"
						value={this.state.username}
						onChange={e => this.username(e)}
						required
					/>

					<input
						type="text"
						placeholder="Enter password"
						value={this.state.password}
						onChange={e => this.password(e)}
						required
					/>

					<input
						type="submit"
						value="Login"
						onClick={
							this.signIn()
						}
					/>
				</form>
			</div>
		);
	}
}

export default Admin;
