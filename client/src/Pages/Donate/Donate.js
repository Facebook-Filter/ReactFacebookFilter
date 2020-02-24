import React, { Component } from 'react';
import './Donate.css';



class Donate extends Component {
  render() {
    return (
      <div className="validation-fbPhoto">
        <div className="Donate">
          <form name="myForm" id="validation-form" onSubmit="return validateForm()" >
            Your name: <br /><input type="text" placeholder="Enter your name here.. " id="text-name"
              required /><br /><br />
            Your email address: <br /><input type="text" placeholder="Enter your email here.."
              id="text-email" /><br /><br />
            Amount to give: <br />$ <input type="number" min="5" id="text-amount" /><br /><br />
            <h4>Make this a recurring donation:</h4>
            <form>
              <input type="radio" name="donate" defaultValue="once" id="once" /> <label htmlFor="once">No,just once</label><br />
              <input name="donate"  type="radio" id="monthly" defaultValue="monthly" /><label htmlFor="monthly">Every Month</label><br />
              <input name="donate"  type="radio" id="quarter" defaultValue="quarter" /><label htmlFor="quarter"> Every 3 months (quarterly)</label><br />
              <input name="donate"  type="radio" id="half" defaultValue="half" /><label htmlFor="half">Every 6 months (semi-annually)</label><br />
              <input name="donate"  type="radio" id="anual" defaultValue="anual" /><label htmlFor="anual"> Every year (annually)</label>
            </form>

            <h6>(optional)</h6>
            <textarea maxLength={250} className="donate_textarea" placeholder="Add your comment here.." id="textarea"
              defaultValue={''} /><br /><br />
              <div className= "donate-buttonn">
            <input type="submit" id="give-btn" value="Give" /><br />
            </div>
          </form>
        </div>
      </div>
    );
  }
};


export default Donate;
