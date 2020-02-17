import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from "../../assets/image/f-1.png";
import BeautyStars from "beauty-stars";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      username: "",
      review:'',
      star: 0
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


 

  addReview(){
    let newList = this.state.reviewList;
    if (this.state.review==='' || this.state.username===''){
      return "error";
    }
        newList.push({username:this.state.username,review:this.state.review,star:this.state.star});
        this.setState({ reviewList: newList, username:'', review: '',star:0})
      
  }



  deleteReview(index){
    let arr=this.state.reviewList;
    arr.splice(index,1);
    
        this.setState({ reviewList: arr })
  }

  render() {
    const images = [
      {
        original: Image1,
        thumbnail: Image1
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
      }
    ];

    return (
      <div className="Home">
        <div className="Slider">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showBullets={true}
            autoPlay={true}
            slideDuration={1100}
            slideInterval={5000}
          />
        </div>
        
        <div className="Rating">
          <h3>Your review is very important to us</h3>
          <p>
            {this.state.star === 1
              ? "terrible"
              : this.state.star === 2
              ? "bad"
              : this.state.star === 3
              ? "good"
              : this.state.star === 4
              ? "very good"
              : this.state.star === 5
              ? "Excellent"
              : "please rate us"}
          </p>
          <div className="stars">
            <BeautyStars
              value={this.state.star}
              onChange={star => this.setState({ star })}
              size="20px"
            />
            <p>{this.state.star}/5</p>
          </div>
          <input
            className="username"
            type="text"
            placeholder="Please enter your username"
            value={this.state.username}
            onChange={e => this.username(e)}
          />
          <input
            className="Review"
            type="text"
            placeholder="Please enter your review"
            value={this.state.review}
            onChange={e => this.review(e)}
          />
          <input className="Submit_review" type="submit" value="Submit" onClick={()=>this.addReview()} />
        
        <ul>
            {this.state.reviewList.map((user,index)=>{
              return (
                <li key={index}>
                  {index+1}- {user.username}- {user.review}-{user.star+'/'+5}
                  <button type="button" onClick={() => this.deleteReview(index)}>delete</button>
                </li>
              )
            })}
          </ul>
          </div>
      </div>
    );
  }
}

export default Home;
