import React from 'react';


export default class SupportAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supports: [],
      email: "",
      question: "",
      editing: false,
      editingIndex: -1
    };
  }

  async componentDidMount() {
    fetch("/support")
      .then(res => res.json())
      .then(supports =>
        this.setState({ supports }, () => console.log("users fetched..", supports))
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


  deleteSupport(questID) {
    let arr = this.state.supports;
    const result = arr.filter(support => support.questID !== questID);

    fetch(`/support/delete/${questID}`)
      .then(res => res.json())
      .then(supports => {
        this.setState({ supports: result });
      });
  }

  editSupport = questID => {
    const support = this.state.supports.find(support => support.questID === questID);
    this.setState({
      editing: true,
      email: support.email,
      question: support.question,
      editingIndex: questID
    });
  };

  updateSupport = async (e) => {
    e.preventDefault();
 
    const res = await fetch(
      `/support/update/${this.state.editingIndex}?email=${this.state.email}&question=${this.state.question}`
    );
    const supports = await res.json();

    this.setState({
      supports: this.state.supports.map(support =>
        support.questID === this.state.editingIndex
          ? { ...support, email: this.state.email, question: this.state.question}
          : support
      ),
      editing: false,
      email: "",
      question: ""
    });
  };


  onSubmit = async (e) => {
    e.preventDefault();

    let newList = this.state.supports;
    if (this.state.email === "" || this.state.question === "") {
      return "error";
    }

    fetch(
      `/support/add?questID=${this.state.questID}&email=${this.state.email}&question=${this.state.question}`
    )
      .then(res => res.json())
      .then(supports => {
        console.log(supports)
        newList.push(supports);
        this.setState({ supports: newList, email: "", question: "" });
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
                this.state.editing ? this.updateSupport(e) : this.onSubmit(e)
              }}
            >
              <h2><input
                type="text"
                placeholder="Enter Support Email"
                value={this.state.email}
                onChange={e => this.email(e)}
              /><input
                  type="text"
                  placeholder="Enter Support Question"
                  value={this.state.question}
                  onChange={e => this.question(e)}
                />
                <input
                  type="submit"
                  value={this.state.editing ? "Update" : "Add"}
                />


              </h2>

            </form>
            <ul>
              {this.state.supports.map((support, index) => {
                return (
                  <li key={index}>
                    {support.questID}- {support.email} / {support.question}
                    <button type="button" onClick={() => this.deleteSupport(support.questID)}>delete</button>
                    <button type="button" onClick={() => this.editSupport(support.questID)}>edit</button>
                  </li>

                );
              })}
            </ul></div></div>


      </main>
    )
  }
}


