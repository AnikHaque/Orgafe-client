import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './WatchShop.css';
const WatchShop = () => {
 
    return (
        <div>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <Link to="/watches">
      <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Banner-22.jpg?v=1559383129" className='img-fluid'>
      </img>
      </Link>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
     <Link to="/watches">
      <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/banner-1_70777f68-9105-439a-95c3-0a23a1262b8b.jpg?v=1559383115" className='img-fluid'></img>
      </Link>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default WatchShop;