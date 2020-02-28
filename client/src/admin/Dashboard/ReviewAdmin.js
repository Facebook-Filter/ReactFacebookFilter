import React from 'react';

export default class ReviewAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      username: "",
      review:"",
      editing: false,
      editingIndex: -1
    };
  }
  async componentDidMount() {
    fetch("/reviews")
      .then(res => res.json())
      .then(reviews =>
        this.setState({ reviews }, () => console.log("users fetched..", reviews))
      );
  }
  username = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };
  review = e => {
    e.preventDefault();
    this.setState({ review: e.target.value });
  };
  deleteReview(revID) {
    let arr = this.state.reviews;
    const result = arr.filter(review => review.revID !== revID);

    fetch(`/reviews/delete/${revID}`)
      .then(res => res.json())
      .then(reviews => {
        this.setState({ reviews: result });
      });
  }

  editReview = revID => {
    const review = this.state.reviews.find(review => review.revID === revID);
    this.setState({
      editing: true,
      username: review.username,
      review: review.review,
      editingIndex: revID
    });
  };

  updateReview = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `/reviews/update/${this.state.editingIndex}?username=${this.state.username}&review=${this.state.review}`
    );
    const review = await res.json();

    this.setState({
      reviews: this.state.reviews.map(review =>
        review.revID === this.state.editingIndex
          ? { ...review, username: this.state.username, review: this.state.review }
          : review
      ),
      editing: false,
      username: "",
      review: ""
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    let newList = this.state.reviews;
    if (this.state.username === "" || this.state.review === "") {
      return "error";
    }

    fetch(
      `/reviews/add?revID=${this.state.revID}&username=${this.state.username}&review=${this.state.review}`
    )
      .then(res => res.json())
      .then(reviews => {
        console.log(reviews)
        newList.push(reviews);
        this.setState({ reviews: newList, username: "", review: "" });
      });
  }

  render() {
    return (
      <main>

        <h1>Reviews List</h1>
        <div className="flex-grid">
          <div>

            <form
              onSubmit={e => {
                this.state.editing ? this.updateReview(e) : this.onSubmit(e)
              }}
            >
              <h2><input
                type="text"
                placeholder="Enter review username"
                value={this.state.username}
                onChange={e => this.username(e)}
              /><input
                  type="text"
                  placeholder="Enter review"
                  value={this.state.review}
                  onChange={e => this.review(e)}
                />
                <input
                  type="submit"
                  value={this.state.editing ? "Update" : "Add"}
                />
              </h2>
            </form>
            <ul>
              {this.state.reviews.map((review, index) => {
                return (
                  <li key={index}>
                    {review.revID}- {review.username} {review.review}
                    <button type="button" onClick={() => this.deleteReview(review.revID)}>delete</button>
                    <button type="button" onClick={() => this.editReview(review.revID)}>edit</button>
                  </li>

                );
              })}
            </ul></div></div>
      </main>
    )
  }
}
