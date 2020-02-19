import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Donate from "./Pages/Donate/Donate";
import Download from "./Pages/Download/Download";
import Support from "./Components/Support/Support";
import FAQ from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import BackDrop from "./Components/BackDrop/BackDrop";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

import "./App.css";
// import './index-1.css';
// import './index-2.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
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
          <div className="app_container">
            <Switch>
              <Route path="/" strict exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/features" component={Features} />
              <Route path="/donate" component={Donate} />
              <Route path="/faq" component={FAQ} />
              <Route path="/support" component={Support} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/download" component={Download} />
              <Route pagh="/blog" component={Blog} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
