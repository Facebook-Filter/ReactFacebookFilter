import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import ContactUs from './Components/ContactUs';
import Donate from './Components/Donate/Donate';
import Download from './Components/Download/Download';
import Support from './Components/Support';
import FAQ from './Components/Faq';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Home from './Components/Home/Home';
import BackDrop from './Components/BackDrop'
import SideDrawer from './Components/SideDrawer'

import './App.css';
import './index-1.css';
import './index-2.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }
  
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  
  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
        <Router>
          <div className="App">
            <Nav drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
            <div className="mainandfooter">
              <Switch>
                <Route path="/" strict exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/features" component={Features}/>
                <Route path="/donate" component={Donate}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/support" component={Support}/>
                <Route path="/contactus" component={ContactUs}/>
                <Route path="/download" component={Download}/>
                <Route pagh="/blog" component={Blog}/>
              </Switch>
              <Footer/>
            </div>
          </div>
        </Router>
    
    );
  }
}

export default App;
