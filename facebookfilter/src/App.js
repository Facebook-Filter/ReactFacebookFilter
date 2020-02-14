import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import SideDrawer from "./Components/SideDrawer";
import BackDrop from "./Components/BackDrop";
import About from "./Components/About";
import Features from "./Components/Features";
import ContactUs from "./Components/ContactUs";
import Donate from "./Components/Donate";
import Download from "./Components/Download";
import Support from "./Components/Support";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
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

          <div className="mainandfooter" style={{ marginTop: "64px" }}>
            <Switch>
              <Route path="/" strict exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/features" component={Features}></Route>
              <Route path="/donate" component={Donate}></Route>
              <Route path="/faq" component={Faq}></Route>
              <Route path="/support" component={Support}></Route>
              <Route path="/contactus" component={ContactUs}></Route>
              <Route path="/download" component={Download}></Route>
              <Route pagh="/blog" component={Blog}></Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
