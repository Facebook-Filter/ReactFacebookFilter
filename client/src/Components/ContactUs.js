import React, { Component } from "react";

import "./Contact.css";
class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <form className="cd-form floating-labels">
          <fieldset>
            <legend>Account Info</legend>
            <div className="error-message">
              <p>Please enter a valid email address</p>
            </div>
            <div className="icon">
              <label className="cd-label" htmlFor="cd-name">
                Name
              </label>
              <input
                className="user"
                type="text"
                name="cd-name"
                id="cd-name"
                required
              />
            </div>
            {/* ... */}
          </fieldset>
          <fieldset>
            <div className="icon">
              <label className="cd-label" htmlFor="cd-textarea">
                Message
              </label>
              <textarea
                className="message"
                name="cd-textarea"
                id="cd-textarea"
                required
                defaultValue={""}
              />
            </div>
            <div>
              <input type="submit" defaultValue="Send Message" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactUs;
