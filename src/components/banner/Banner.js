import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block img-fluid banner-image w-100"
      src="https://images.hdqwalls.com/wallpapers/bmw-f82-dark-side-car-digital-art-4k-3d.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className='fw-bold text-white'>Best Place For Buying Car</h1>
    <h3 className='classic-p'><i>New , Latest & Top Class <span className='generation fw-bold'>Speedy Cars</span></i></h3>
    </Carousel.Caption>
  </Carousel.Item> 
  
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100 banner-image"
      src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/banner/img-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='fw-bold text-white'>Welcome To Auto Car</h1>
      {/* <p className='fs-5 classic-p'><i>Complete your everyday look with a stylish watch</i></p> */}
      <h3 className='classic-p'><i>Find Your <span className='generation fw-bold'>Latest Car</span></i></h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;