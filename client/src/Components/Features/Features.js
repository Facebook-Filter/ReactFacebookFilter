import React, { Component } from "react";
import Image1 from "../../assets/image/f-1.png";
import Image2 from "../../assets/image/f-2.png";
import Image3 from "../../assets/image/f-3.png";
import Image4 from "../../assets/image/f-4.png";
import Image5 from "../../assets/image/f-5.png";
import Image6 from "../../assets/image/f-6.png";
import Image7 from "../../assets/image/f-7.png";
import Image8 from "../../assets/image/f-8.png";
import Image9 from "../../assets/image/f-9.png";
import Image10 from "../../assets/image/f-10.png";
import Image11 from "../../assets/image/f-11.png";
import Image12 from "../../assets/image/f-12.png";
import Image13 from "../../assets/image/f-13.png";
import "./Features.css";

const Feature = ({ title, description, image }) => {
  return (
    <div className="grid-feature">
      <div className="content">
        <h2 className="f1-h2">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="featured_image">
        <img src={image} className="f1-pic-size" alt="whatever" />{" "}
      </div>
    </div>
  );
};

class Features extends Component {
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
