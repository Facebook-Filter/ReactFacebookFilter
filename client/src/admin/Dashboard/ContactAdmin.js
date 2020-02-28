import React from 'react';

export default class ContactAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      nameChosen: '',
      email: "",
      message: "",
      editing: false,
      editingIndex: -1
    };
  }
  async componentDidMount() {
    fetch("/contacts")
      .then(res => res.json())
      .then(contacts =>
        this.setState({ contacts }, () => console.log("users fetched..", contacts))
      );
  }
  deleteContact(contID) {
    let arr = this.state.contacts;
    const result = arr.filter(contact => contact.contID !== contID);

    fetch(`/contacts/delete/${contID}`)
      .then(res => res.json())
      .then(contacts => {
        this.setState({ contacts: result });
      });
  }
  render() {
    return (
      <main>
        <h1>Contacts List</h1>
        <div className="flex-grid">
          <div>
            <ul>
              {this.state.contacts.map((contact, index) => {
                return (
                  <li key={index}>
                    {contact.contID} -  {contact.nameChosen}  /  {contact.email}  /  {contact.message}
                    <button type="button" onClick={() => this.deleteContact(contact.contID)}>delete</button>
                  </li>
                );
              })}
            </ul></div></div>
      </main>
    )
  }
}
