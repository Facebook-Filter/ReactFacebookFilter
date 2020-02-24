import React from 'react';



class ReviewForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          reviews: [],
          username: "",
          review: ''
        };
      }
    


    username = e => {
        e.preventDefault();
        this.setState({ username: e.target.value });
      };
    
    
     
    
      review = e => {
        e.preventDefault();
        this.setState({ review: e.target.value });
      };
    
    
      addReview() {
        let newList = this.state.reviews;
        if (this.state.username === "" || this.state.review === "") {
          return "error";
        }
    
        fetch(
          `/reviews/add?id=${this.state.id}&username=${this.state.username}&review=${this.state.review}`
        )
          .then(res => res.json())
          .then(reviews => {
            newList.push(reviews);
            this.setState({ reviews: newList, username: "", review: ""  });
          });
          alert("Successfully sent")
      }
    render(){
        return(
            <form id="contact" action method="post" onSubmit={event => {
                event.preventDefault();
              }}>
            <h3>Quick Review</h3>
            <h4>Review us today, your review is important to us!</h4>
            <fieldset>
              <input value={this.state.username}
            onChange={e => this.username(e)}
                placeholder="Your Username"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type Your Review Here...."
                tabIndex={5}
                required
                defaultValue={""}
                value={this.state.review}
                onChange={e => this.review(e)}/>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={
                    e => this.addReview()}
              >
                Submit
              </button>
            </fieldset>
          </form>
        )
    }
}

export default ReviewForm;