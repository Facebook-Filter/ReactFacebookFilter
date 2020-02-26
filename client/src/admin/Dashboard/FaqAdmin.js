import React from 'react';


export default class FaqAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [],
      question: "",
      answer: "",
      editing: false,
      editingIndex: -1
    };
  }

  async componentDidMount() {
    fetch("/faq")
      .then(res => res.json())
      .then(faqs =>
        this.setState({ faqs }, () => console.log("users fetched..", faqs))
      );
  }


  question = e => {
    e.preventDefault();
    this.setState({ question: e.target.value });
  };
  answer = e => {
    e.preventDefault();
    this.setState({ answer: e.target.value });
  };


  deleteFaq(faqID) {
    let arr = this.state.faqs;
    const result = arr.filter(faq => faq.faqID !== faqID);

    fetch(`/faq/delete/${faqID}`)
      .then(res => res.json())
      .then(faqs => {
        this.setState({ faqs: result });
      });
  }

  editFaq = faqID => {
    const faq = this.state.faqs.find(faq => faq.faqID === faqID);
    this.setState({
      editing: true,
      question: faq.question,
      answer: faq.answer,
      editingIndex: faqID
    });
  };

  updateFaq = async (e) => {
    e.preventDefault();
 
    const res = await fetch(
      `/faq/update/${this.state.editingIndex}?question=${this.state.question}&answer=${this.state.answer}`
    );
    const faqs = await res.json();

    this.setState({
      faqs: this.state.faqs.map(faq =>
        faq.faqID === this.state.editingIndex
          ? { ...faq, question: this.state.question, answer: this.state.answer}
          : faq
      ),
      editing: false,
      question: "",
      answer: ""
    });
  };


  onSubmit = async (e) => {
    e.preventDefault();

    let newList = this.state.faqs;
    if (this.state.question === "" || this.state.answer === "") {
      return "error";
    }

    fetch(
      `/faq/add?faqID=${this.state.faqID}&question=${this.state.question}&answer=${this.state.answer}`
    )
      .then(res => res.json())
      .then(faqs => {
        console.log(faqs)
        newList.push(faqs);
        this.setState({ faqs: newList, question: "", answer: "" });
      });

  }


  render() {
    return (
      <main>

        <h1>Faqs List</h1>
        <div className="flex-grid">
          <div>

            <form
              onSubmit={e => {
                this.state.editing ? this.updateFaq(e) : this.onSubmit(e)
              }}
            >
              <h2><input
                type="text"
                placeholder="Enter Faq Question"
                value={this.state.question}
                onChange={e => this.question(e)}
              /><input
                  type="text"
                  placeholder="Enter Faq Answer"
                  value={this.state.answer}
                  onChange={e => this.answer(e)}
                />
                <input
                  type="submit"
                  value={this.state.editing ? "Update" : "Add"}
                />


              </h2>

            </form>
            <ul>
              {this.state.faqs.map((faq, index) => {
                return (
                  <li key={index}>
                    {faq.faqID}- {faq.question} / {faq.answer}
                    <button type="button" onClick={() => this.deleteFaq(faq.faqID)}>delete</button>
                    <button type="button" onClick={() => this.editFaq(faq.faqID)}>edit</button>
                  </li>

                );
              })}
            </ul></div></div>


      </main>
    )
  }
}


