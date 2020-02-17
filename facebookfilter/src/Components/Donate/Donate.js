import React, {Component} from 'react';
import './Donate.css';
import Fbcurrency from '../../assets/image/fb-donation.jpg';


class Donate extends Component{
  render(){
    return(       <div className="validation-fbPhoto">
            <div className="Donate">
              <form name="myForm" id="validation-form" onsubmit="return validateForm()" method="post">
                Your name: <br /><input type="text" placeholder="Enter your name here.. " id="text-name" required /><br /><br />
                Your email address: <br /><input type="text" placeholder="Enter your email here.." id="text-email" /><br /><br />
                Amount to give: <br />$ <input type="text" id="text-amount" /><br /><br />
                <h4>Make this a recurring donation:</h4>
                <input type="radio" /> No,just once<br />
                <input type="radio" /> Every month<br />
                <input type="radio" /> Every 3 months (quarterly)<br />
                <input type="radio" /> Every 6 months (semi-annually)<br /> 
                <input type="radio" /> Every year (annually)<br />
                <h6>(optional)</h6>
                <textarea className="donate_textarea" placeholder="Add your comment here.." id="textarea" defaultValue={""} /><br /><br />
                <input type="submit" id="give-btn" value="Give" /><br />        
                
              </form></div>
          <div>
          <h2>Donate</h2>
          <img src={Fbcurrency} className="fb-donation" alt="whatever"/>
          </div></div>
);
}
};
          
        

export default Donate;