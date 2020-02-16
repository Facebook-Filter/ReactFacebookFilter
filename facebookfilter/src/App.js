import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import ContactUs from './Components/ContactUs/ContactUs';
import Donate from './Components/Donate/Donate';
import Download from "./Components/Download/Download";
import Support from './Components/Support/Support';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Home from "./Components/Home/Home";
import './App.css';
import './index-1.css';
import './index-2.css';


class App extends Component{

  render(){
    return( <>
      <Router>
      <div className="App">
      <Nav/>
      <div className="mainandfooter">
      <Switch>
       <Route path="/" strict exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/features" component={Features}></Route>
      <Route path="/donate" component={Donate}></Route>
      <Route path="/faq" component={FAQ}></Route>
      <Route path="/support" component={Support}></Route>
      <Route path="/contactus" component={ContactUs}></Route>
      <Route path="/download" component={Download}></Route>
      <Route pagh="/blog" component={Blog}></Route>
      </Switch>

      
      <Footer/>
      </div>
      </div>
      </Router>
      </>
      
    );
    
  }
}

export default App;