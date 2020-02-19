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
      features: [],
      title: "",
      // image: [],
      description: ""
    };
  }
  async componentDidMount() {
    fetch("/features")
      .then(res => res.jsong())
      .then(features => this.setState({ features }));
  }

  // addFeature() {
  //   fetch(
  //     `/features/add?featID=${this.state.featID}&title=${this.state.title}&image=${this.state.image}&description=${this.state.description}`
  //   )
  //     .then(res => res.json())
  //     .then(users => {
  //       this.setState({ features: features });
  //     });
  // }
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

            <input
              type="text"
              placeholder="Enter your feature"
              value={this.state.featureTitle}
              onChange={e => this.featuretitle(e)}
            />
            <input
              type="text"
              placeholder="Enter your Description"
              value={this.state.description}
              onChange={e => this.description(e)}
            />
            <input
              type="submit"
              value={this.state.editing ? "Update" : "Add"}
              onClick={
                this.state.editing
                  ? e => this.updateFeature()
                  : e => this.addFeature()
              }
            />

            <div className="features_container">

              
            {this.state.features.map((feature, index) => {
              return (<Feature
                key={index}
                id={index}
                value={feature}
                deleteFeature={this.deleteFeature}
                editFeature={this.editFeature}
              />)
              })
            }
           
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
