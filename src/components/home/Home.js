import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Contact from '../contact/Contact';

import Footer from '../footer/Footer';
import HomeWatches from '../homewatches/HomeWatches';
import ManageReview from '../managereview/ManageReview';
import Offer from '../offer/Offer';
import SpecialWatchStore from '../specialwatchstore/SpecialWatchStore';
import Blogs from '../blogs/Blogs';
import WatchShop from '../watchshop/WatchShop';
import Facilities from '../facilities/Facilities';
import Cars from '../cars/Cars';
import HomeCar from '../homecar/HomeCar';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <br></br>
            <br></br>
            <Facilities></Facilities>
            
            <br></br>
            <br></br>
           <HomeCar></HomeCar>
           
           <br></br>
            <br></br>
          
           <Offer></Offer>
          
           <br></br>
            <br></br>
             
            <About></About>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          
          <Blogs></Blogs>
          <br></br>
            <br></br>
          <br></br>
            <br></br>
          
          <ManageReview></ManageReview>
          
          <br></br>
            <br></br>
          <br></br>
            <br></br>
         
          <Contact></Contact>
          <br></br>
            <br></br>
         <Footer></Footer>
           
        </div>
    );
};

export default Home;