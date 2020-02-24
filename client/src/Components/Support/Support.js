import React, { Component } from "react";
import './Support.css'
class Support extends Component {
  state = {
		post: [],
		allPosts: []
  };
  

  async componentDidMount() {
    fetch("/supports")
      .then(res => res.json())
      .then(support => this.setState({ support }));
  }

	_onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter(item =>
			item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};

	render() {
		return (
			<div className="container">
				<div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						{/* input field activates onKeyUp function on state change */}
						<input
							type="search"
							onChange={this._onKeyUp}
							name="s"
							id="s"
							placeholder="Search"
						/>
						<button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</button>
					</form>
				</div>
				<ul className="data-list">
					{/* post items mapped in a list linked to onKeyUp function */}
					{this.state.post.map((item, index) => (
						<li className={"block-" + index}>
							<a className="title" href={item.link}>
								<h3>{item.title.rendered}</h3>
							</a>
							<a className="link" href={item.link}>
							 
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Support;