import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './IndividualCar.css';
const IndividualCar = (props) => {
    const {_id,name,description,img,price,rating} = props.foods;
    const firstExample = {
      size: 30,
      value:rating,
      edit: false,
      
      
    };
    return (
        <div>
           <div class="col">
    {/* <div class="card h-100 w-100 card-bg p-2">
      <img src={img} class="card-img-top img-fluid w-50 mx-auto image-watch" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center ">{name}</h5>
         <p className='text-center'>{description.slice(0,50)}</p>
        <h4 class="card-text fw-bold text-center">$ {price}</h4>
      </div>
      <Link to={`/car/${_id}`}>
        <button className="btn btn-dark text-white mx-5 px-4 mb-3 mt-3"> Details <i class="fa-solid fa-arrow-right px-2"></i></button>
        </Link> 
  </div> */}
  <img src={img} class="card-img-top img-fluid  mx-auto image-watch" alt="..."></img>
  <h5 class="card-title mt-3  ">{name}</h5>
  <p className=''>{description}</p>
  <h4 class="card-text fw-bold">$ {price}</h4>
  <ReactStars {...firstExample}  />
  <Link to={`/car/${_id}`}>
        <button className="btn btn-dark text-white px-4 mb-3 mt-3"> Details <i class="fa-solid fa-arrow-right px-2"></i></button>
        </Link> 
</div>

        </div>
    );
};

export default IndividualCar;