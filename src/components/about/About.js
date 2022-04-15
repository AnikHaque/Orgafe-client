import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className='mt-5'>
            <div class="container">
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 me-5">
      <img src='https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/img-6.jpg' className='img-fluid w-100 about-image'></img>
      
    </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-5 bg-dark p-5">
      <h1 className='fs-1 about-heading pb-3'>WELCOME TO AUTO CAR</h1>
      <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has of type and scrambled it to make a type specimen book. It has

      electronic typesetting, remaining essentially unchanged.
</p>

<button className='btn btn-light  text-dark px-4 pe-4 mt-3'>Read More</button>
    </div>
    
    
  </div>
 
</div>

        </div>
    );
};

export default About;