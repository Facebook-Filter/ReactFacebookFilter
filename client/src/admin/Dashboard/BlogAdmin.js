import React from 'react';

export default class BlogAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      title: "",
      blogText: "",
      editing: false,
      editingIndex: -1
    };
  }

  async componentDidMount() {
    fetch("/blog")
      .then(res => res.json())
      .then(blogs =>
        this.setState({ blogs }, () => console.log("users fetched..", blogs))
      );
  }
  title = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  blogText = e => {
    e.preventDefault();
    this.setState({ blogText: e.target.value });
  };
  deleteBlog(blogID) {
    let arr = this.state.blogs;
    const result = arr.filter(blog => blog.blogID !== blogID);

    fetch(`/blog/delete/${blogID}`)
      .then(res => res.json())
      .then(blogs => {
        this.setState({ blogs: result });
      });
  }

  editBlog = blogID => {
    const blog = this.state.blogs.find(blog => blog.blogID === blogID);
    this.setState({
      editing: true,
      title: blog.title,
      blogText: blog.blogText,
      editingIndex: blogID
    });
  };

  updateBlog = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `/blog/update/${this.state.editingIndex}?title=${this.state.title}&blogText=${this.state.blogText}`
    );
    const blogs = await res.json();

    this.setState({
      blogs: this.state.blogs.map(blog =>
        blog.blogID === this.state.editingIndex
          ? { ...blog, title: this.state.title, blogText: this.state.blogText }
          : blog
      ),
      editing: false,
      title: "",
      blogText: ""
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    let newList = this.state.blogs;
    if (this.state.title === "" || this.state.blogText === "") {
      return "error";
    }

    fetch(
      `/blog/add?blogID=${this.state.blogID}&title=${this.state.title}&blogText=${this.state.blogText}`
    )
      .then(res => res.json())
      .then(blogs => {
        console.log(blogs)
        newList.push(blogs);
        this.setState({ blogs: newList, title: "", blogText: "" });
      });
  }

  render() {
    return (
      <main>

        <h1>Blogs List</h1>
        <div className="flex-grid">
          <div>

            <form
              onSubmit={e => {
                this.state.editing ? this.updateBlog(e) : this.onSubmit(e)
              }}
            >
              <h2><input
                type="text"
                placeholder="Enter blog title"
                value={this.state.title}
                onChange={e => this.title(e)}
              /><input
                  type="text"
                  placeholder="Enter blog description"
                  value={this.state.blogText}
                  onChange={e => this.blogText(e)}
                />
                <input
                  type="submit"
                  value={this.state.editing ? "Update" : "Add"}
                />
              </h2>
            </form>
            <ul>
              {this.state.blogs.map((blog, index) => {
                return (
                  <li key={index}>
                    {blog.blogID}- {blog.title} {blog.blogText}
                    <button type="button" onClick={() => this.deleteBlog(blog.blogID)}>delete</button>
                    <button type="button" onClick={() => this.editBlog(blog.blogID)}>edit</button>
                  </li>

                );
              })}
            </ul></div></div>
      </main>
    )
  }
}
