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

	handleUsernameChange = e => {
		this.setState({ username: e.target.value });
	};

	handlePasswordChange = e => {
		this.setState({ password: e.target.value });
	};

	signIn = async (event) => {
		event.preventDefault();
		const { username, password } = this.state;


		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

		var urlencoded = new URLSearchParams();
		urlencoded.append("username", username);
		urlencoded.append("password", password);

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: urlencoded,
		};

		const response = await fetch("http://localhost:5000/login", requestOptions);

		const result = await response.json();
		console.log('result ', result);
		if (result.status === 200) {
			// Store
			localStorage.setItem("token", result.jwt);
			window.location.reload();
		}
		else {
			alert("Wrong username or password");
		}

	}
	render() {
		return (
			<div className="Login">
				<div className="container">
					<form id="adminLogin" action method="post" onSubmit={this.signIn}>
						<h3>Login</h3>
						<h4>Please enter your credentials</h4>
						<fieldset>
							<input
								placeholder="username"
								type="text"
								tabIndex={1}
								onChange={this.handleUsernameChange}
								required
								autofocus
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="password"
								type="password"
								tabIndex={2}
								onChange={this.handlePasswordChange}
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