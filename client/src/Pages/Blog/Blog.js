import React, { Component } from "react";
import "./Blog.css";

const Blogs = props => {
  return (
    <div className="blog">
      <div className="title_blog">
        <h2>{props.value.title}</h2>
      </div>
      <div className="text_blog">
        <p>{props.value.blogText}</p>
      </div>
    </div>
  );
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      title: "",
      blogText: ""
    };
  }
  async componentDidMount() {
    fetch("/blog")
      .then(res => res.json())
      .then(blogs => this.setState({ blogs }));
  }
  render() {
    return (
      <div>
        {this.state.blogs.map((blog, index) => {
          return <Blogs key={index} blogID={index} value={blog} />;
        })}
      </div>
    );
  }
}

export default Blog;
