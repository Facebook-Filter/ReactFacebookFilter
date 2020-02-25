import React, { Component } from "react";
import './Support.css'
import Search from "./Search";
import QuestionForm from "./QuestionForm";

class Support extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			questions: [],
			isFormSubmited: false
		}

		this.onSearchSubmit = this.onSearchSubmit.bind(this)
	}

	handleChangeQuestion = (event) => {
		const question = event.target.value;
		this.setState({
			question: question,
			questions: [],
			isFormSubmited: false
		})
	}

	componentWillMount = () => {
		this.setState({
			initialItems: this.props.content,
			items: this.props.content
		})
	}

	async onSearchSubmit(event) {

		event.preventDefault();
		fetch(`/support/search?question=${this.state.question}`)
			.then(res => res.json())
			.then(data => {


				this.setState({ questions: data.result, isFormSubmited: true })

			});
	}


	render() {

		return (
			<><div className="search_comp">
				<Search content={this.state.question} onSearchSubmit={this.onSearchSubmit} handleChangeQuestion={this.handleChangeQuestion} />
				{
					this.state.question !== '' ? (
						this.state.questions.length === 0 ? (this.state.isFormSubmited ? <QuestionForm /> : 'Provide a Question') : this.state.questions.map(item => {
							return <div key={item.faqID}>
								<h3>{item.question}</h3>
								<p>{item.answer}</p>
							</div>
						})
					) : 'Provide a Question'
				}


			</div>
			</>
		);
	}
}
export default Support;




