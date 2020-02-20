import React, { Component } from "react";

import "./Faq.css";

const Faqs = props => {
  return (
    <div className="Faq">
      <div className="faq_question">
        <h3 className="faq question">{props.value.question}</h3>
      </div>
      <div className="faq_answer">
        <p className="faq answer">{props.value.answer}</p>
      </div>
    </div>
  );
};
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [],
      question: "",
      answer: ""
    };
  }

  async componentDidMount() {
    fetch("/faq")
      .then(res => res.json())
      .then(faq => this.setState({ faq }));
  }

  render() {
    return (
      <div>
        {this.state.faq.map((faqs, index) => {
          return <Faqs key={index} faqID={index} value={faqs} />;
        })}
      </div>
    );
  }
}

export default Faq;
