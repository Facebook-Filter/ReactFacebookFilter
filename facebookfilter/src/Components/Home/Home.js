import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from "../../assets/image/f-1.png";

class Home extends Component{

  render() {

    const images = [
      {
        original: {Image1},
        thumbnail: {Image1}
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    return (
      <>
      <ImageGallery items={images} />
      <p>hgjhgjghjg</p>
      <img src={Image1} alt="hgh"/>
      </>
    );
  }

}

export default Home;