import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './IndividualProduct.css';
const IndividualProduct = (props) => {
    const {_id,name,description,img,price,rating} = props.foods;
    const firstExample = {
      size: 35,
      value:rating,
      edit: false,
     
      
    };
    return (
        <div>
           <div class="col">
  <div className='individual-products'>
  <img src={img} class="card-img-top img-fluid d-flex mx-auto image-watch" alt="..."></img>
  <h4 class="card-title mt-3 text-center ">{name}</h4>
  <ReactStars {...firstExample}  className='mx-5' />
  <p class="card-text fw-bold text-secondary mx-5">$ {price}.00</p>
  
  <Link to={`/products/${_id}`}>
        <button className="btn btn-details text-white px-4 mb-3"> Details <i class="fa-solid fa-arrow-right px-2"></i></button>
        </Link> 
  </div>

</div>

        </div>
    );
};

export default IndividualProduct;