import React from 'react';

export default class ClientReviewForm extends React.Component {
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
    fetch("/home/reviews")
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
  deleteReview(appRevID) {
    let arr = this.state.reviews;
    const result = arr.filter(review => review.appRevID !== appRevID);

    fetch(`/home/reviews/delete/${appRevID}`)
      .then(res => res.json())
      .then(reviews => {
        this.setState({ reviews: result });
      });
  }
  render() {
    return (
      <main>

        <h1>Client Reviews List</h1>
        <div className="flex-grid">
          <div>
            <ul>
              {this.state.reviews.map((review, index) => {
                return (
                  <li key={index}>
                    {review.appRevID}- {review.username} {review.review}
                    <button type="button" onClick={() => this.deleteReview(review.appRevID)}>delete</button>
                  </li>
                );
              })}
            </ul></div></div>
      </main>
    )
  }
}
