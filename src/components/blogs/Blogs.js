import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
const Blogs = () => {
 
    return (
        <div>
        <h1 className="text-center mb-4">Our Latest Blogs</h1>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
      <Link to="/watches">
      <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/blog/blog-2.jpg" className='img-fluid'>
      </img>
      </Link>
     <Link> <h5 className='text-center text-dark'>Find Your Dream Car</h5></Link>
     <p className='text-center'>by Auto Car</p>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
      <Link to="/watches">
      <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/blog/blog-3.jpg" className='img-fluid'>
      </img>
      </Link>
      <Link> <h5 className='text-center text-dark'>Buying a Best Sports Car</h5></Link>
     <p className='text-center'>by Auto Car</p>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
     <Link to="/watches">
      <img src="https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/blog/blog-1.jpg" className='img-fluid'></img>
      </Link>
      <Link> <h5 className='text-center text-dark'>Selling Your New Cars?</h5></Link>
     <p className='text-center'>by Auto Car</p>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Blogs;