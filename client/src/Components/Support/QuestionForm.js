import React, { Component } from "react";

// import "./Contact.css";
class QuestionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      
      email: "",
      question: ""
    };
  }

  async componentDidMount() {
    fetch("/support")
      .then(res => res.json())
      .then(questions =>
        this.setState({ questions }, () => console.log("users fetched..", questions))
      );
  }


  


  email = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  question = e => {
    e.preventDefault();
    this.setState({ question: e.target.value });
  };


  addQuestion() {
    let newList = this.state.questions;
    if ( this.state.email === "" || this.state.question === "") {
      return "error";
    }

    fetch(
      `/support/add?id=${this.state.id}&email=${this.state.email}&question=${this.state.question}`
    )
      .then(res => res.json())
      .then(contactus => {
        newList.push(contactus);
        this.setState({ questions: newList, email: "", question: ""  });
      });
      alert("Successfully sent")
  }

  render() {
    return (
      <div className="ContactUs">
        <div className="container">
          <form id="contact" action method="post" onSubmit={event => {
            event.preventDefault();
          }}>
            <h3>Add your question</h3>
            
            
              
            <fieldset>
              <input value={this.state.email}
            onChange={e => this.email(e)}
                placeholder="Your Email Address"
                type="email"
                tabIndex={2}
                required
              />
            </fieldset>
            <fieldset>
              <textarea value={this.state.question}
            onChange={e => this.question(e)}
                placeholder="Type your Question Here...."
                tabIndex={5}
                required
                defaultValue={""}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={ e => this.addQuestion()
                }
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
