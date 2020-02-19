import React, { Component } from "react";
import Image1 from "../../assets/image/f-1.png";

import "./Features.css";

const Feature = ({ title, description, image }) => {
  return (
    <div className="grid-feature">
      <div className="content">
        <h2 className="f1-h2">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="featured_image">
        <img src={image} className="f1-pic-size" alt="whatever" />
      </div>
    </div>
  );
};

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // features: [],
      // title: [],
      // // image:[],
      // description: []
    };
  }

  async componentDidMount() {
    fetch("/features")
      .then(res => res.jsong())
      .then(features => this.setState({ features }));
  }

  render() {
    return (
      <>
        <div className="Features">
          <div>
            <div className="features-intro">
              <h1 id="features-h1">Features</h1>
              <div id="features-defn">
                <p>
                  " Social Fixer has a wide range of features to make your
                  Facebook experience better "
                </p>
                <br />
                <p>Here are some of the popular ones:</p>
              </div>
            </div>

            <div className="features_container">
              <Feature
                title="hello world"
                image={Image1}
                // image={`http://localhost:3000/img/features/${test}`}
                description={"Hello worlds"}
              />
              <Feature
                title="hello world"
                image={Image1}
                description={"Hello worlds"}
              />
              <Feature
                title="hello world"
                image={Image1}
                description={"Hello worlds"}
              />
              <Feature
                title="hello world"
                image={Image1}
                description={"Hello worlds"}
              />
              <Feature
                title="hello world"
                image={Image1}
                description={"Hello worlds"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
