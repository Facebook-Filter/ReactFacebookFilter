
import React from 'react';
import './Review.css';

const ReviewItem = props => {
  return (
    <div className="grid-review">

      <div className="review">
        
        <div>
        <h3 className="f1-h2">{props.value.username}</h3>
        <p>{props.value.review}</p>
        </div>
      </div>
      </div>
    
  );
};

class Review extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      username: "",
      review: ''
    };
  }

  async componentDidMount() {
    fetch("/home")
      .then(res => res.json())
      .then(reviews => this.setState({ reviews }));
  }

  render(){
    return(
      <> <h2>Reviews</h2><div className="features_container">
      {this.state.reviews.map((review, index) => {
        return (
          // <li key={index}>

          <ReviewItem key={index} featID={index} value={review} />
        );
      })}
    </div></>
    )
  }
}


export default Review;