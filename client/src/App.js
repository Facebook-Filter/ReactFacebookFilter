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
import FeatureAdmin from './admin/Dashboard/FeatureAdmin';
import NavAdmin from './admin/Dashboard/NavAdmin';
import BlogAdmin from './admin/Dashboard/BlogAdmin';
import SupportAdmin from './admin/Dashboard/SupportAdmin';
import ContactAdmin from './admin/Dashboard/ContactAdmin';
import ReviewAdmin from './admin/Dashboard/ReviewAdmin';
import FaqAdmin from './admin/Dashboard/FaqAdmin';

import './admin/Dashboard/Dashboard.css';


// import Admin from "./admin/Admin";

// import "./App.css";
// import './index-1.css';
// import './index-2.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <div className="wrapper">
        <Route path='/admin'>
        <NavAdmin/>
  <Route path="/admin/feature" component={FeatureAdmin} />
  <Route path="/admin/blog" component={BlogAdmin} />
  <Route path="/admin/faq" component={FaqAdmin} />
  <Route path="/admin/support" component={SupportAdmin} />
  <Route path="/admin/review" component={ReviewAdmin} />
  <Route path="/admin/contactus" component={ContactAdmin} />
 
  </Route>
  
</div></Switch>

<Switch>
            
              <div className="app_container">
              <Route path="/" >
              <Nav  />
                <Route path="/" strict exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/features" component={Features} />
                <Route path="/donate" component={Donate} />
                <Route path="/faq" component={FAQ} />
                <Route path="/support" component={Support} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/download" component={Download} />
                <Route path="/blog" component={Blog} />
                <Footer />
            
            </Route>  </div>
          </Switch>
        </div>

      

      </Router>
    );
  }
}

export default App;
