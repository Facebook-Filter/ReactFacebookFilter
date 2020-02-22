import React, { Component } from "react";
import "./Login.css";


class Login extends Component {
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
			<div className="Login">
				<div className="container">
					<form id="adminLogin" action method="post">
						<h3>Login</h3>
						<h4>Please enter your credentials</h4>
						<fieldset>
							<input
								placeholder="username"
								type="text"
								tabIndex={1}
								required
								autofocus
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="password"
								type="password"
								tabIndex={2}
								required
							/>
						</fieldset>
						<fieldset>
							<button
								name="submit"
								type="submit"
								id="contact-submit"
								data-submit="...Sending"
							>
								Login
              					</button>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
