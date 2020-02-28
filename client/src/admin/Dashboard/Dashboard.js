import React, { Component } from "react";
import imageFeature from "../../assets/image/f-1.png";

class Dashboard extends Component {
	state = {
		editMode: false,
		addMode: false,
		viewMode: false,
		listMode: true,
		edit: {
			title: "Hello",
			image: "Image",
			description: "Hello description"
		},
		view: {
			title: "Hello ssss",
			image: "Imagesss",
			description: "Hello Hey description"
		},
		add: {
			title: "",
			image: "",
			description: ""
		},
		viewList: [
			{
				title: "Hello ssss",
				image: "Imagesss",
				description: "Hello Hey description"
			},
			{
				title: "Hello ssss",
				image: "Imagesss",
				description: "Hello Hey description"
			},
			{
				title: "Hello ssss",
				image: "Imagesss",
				description: "Hello Hey description"
			},
			{
				title: "Hello ssss",
				image: "Imagesss",
				description: "Hello Hey description"
			}
		],

		contact: {
			id: 2
		}
	};

	handleLogout() {
		localStorage.removeItem('token');
		window.location.reload();
	}

	toggleMode(mode) {
		if (mode === "editMode") {
			this.setState({
				editMode: false,
				addMode: false,
				viewMode: false,
				listMode: true
			});
		} else if (mode === "addMode") {
			this.setState({
				editMode: false,
				addMode: true,
				viewMode: false,
				listMode: false
			});
		} else if (mode === "viewMode") {
			this.setState({
				editMode: false,
				addMode: false,
				viewMode: true,
				listMode: false
			});
		} else if (mode === "listMode") {
			this.setState({
				editMode: false,
				addMode: false,
				viewMode: false,
				listMode: true
			});
		}
	}

	onSubmit = evt => {
		evt.preventDefault();
		const form = evt.target;
		const id = this.state.contact.id;
		const title = form.title.value;
		const image = form.image.value;
		const description = form.description.value;
		this.updateOption(id, { title, image, description });
		this.toggleMode("listMode");
	};

	updateOption = (id, props) => { };

	deleteFeature = image => { };

	addFeature = image => { };

	renderEditMode() {
		return (
			<>
				<div className="editOption">
					<form onSubmit={this.onSubmit} onReset={this.toggleMode}>
						<div className="optionName-title">
							<label htmlFor="title">Title</label>
							<input
								id="title"
								type="text"
								name="title"
								defaultValue={this.state.edit.title}
							/>
						</div>
						<div className="optionName-image">
							<label htmlFor="image1-id">Image</label>
							<input
								id="image1-id"
								type="text"
								name="image"
								defaultValue={this.state.edit.image}
							/>
						</div>

						<div className="optionName-description">
							<label htmlFor="desc1-id">Description:</label>
							<input
								id="desk1-id"
								type="text"
								name="description"
								defaultValue={this.state.edit.description}
							/>
						</div>

						<br />

						<div className="three-buttons">
							<input
								type="submit"
								value="Add"
								onClick={event => {
									alert("Add show add form");
								}}
							/>
							<input
								type="button"
								value="Delete"
								onClick={event => {
									alert("delete");
								}}
							/>
							<input type="submit" value="Edit" className="button" />
						</div>
					</form>
				</div>
			</>
		);
	}

	renderViewMode() {
		return (
			<>
				<div className="editOption">
					<div className="optionName-text">Feature View mode</div>
					<br />
					<img className="feaureImage" src={imageFeature} alt="feature image" />
					<div>
						<label>Title : </label>
						<p>{this.state.view.title}</p>
					</div>

					<div>
						<label>Image : </label>
						<p>{this.state.view.image}</p>
					</div>
					<div>
						<label>Description : </label>
						<p>{this.state.view.description}</p>
					</div>

					<br />
					<br />
					<button onClick={() => this.addFeature(this.state.image)}>Add</button>
					<button onClick={() => this.deleteFeature(this.state.image)}>
						Delete
					</button>
					<button onClick={() => this.toggleMode()}>Edit</button>
				</div>
			</>
		);
	}

	renderListMode() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td>Title</td>
							<td>Image</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{this.state.viewList.map(item => {
							return (
								<tr>
									<td>{item.title}</td>
									<td>{item.image}</td>
									<td>{item.description}</td>
									<td>
										<button type="button">Edit</button>
										<button type="button">View</button>
										<button type="button">Delete</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button onClick={() => this.handleLogout()}>Log out</button>
			</div>
		);
	}
	renderAddFeature() {
		return (
			<>
				<form>
					<label>Title:</label>
					<input type="text" id="title-addItem" name="title" /> <br />
					<input type="text" id="image-addItem" name="image" /> <br />
					<input type="Description" id="desk-addItem" name="description" />{" "}
					<br />
					<input type="button" value="Apply" />
				</form>
			</>
		);
	}

	render() {
		// if(this.state.status === status.EDIT){
		// 	return this.renderEditMode();
		// }else if(this.state.status === status.VIEW_ITEM){
		// 	return this.renderViewMode();
		// }else if(this.state.status === status.ADD){
		// 	return this.renderAddFeature();
		// }
		if (this.state.editMode) {
			return this.renderEditMode();
		} else if (this.state.addMode) {
			return this.renderAddFeature();
		} else if (this.state.viewMode) {
			return this.renderViewMode();
		} else if (this.state.viewList) {
			return this.renderListMode();
		}
	}
}

export default Dashboard;
