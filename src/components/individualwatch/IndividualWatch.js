import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './IndividualWatch.css';
const IndividualWatch = (props) => {
    const {_id,name,description,img,price} = props.foods;
    return (
        <div>
           <div class="col">
    <div class="card h-100 w-100 card-bg p-2">
      <img src={img} class="card-img-top img-fluid w-50 mx-auto image-watch" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center ">{name}</h5>
         <p className='text-center'>{description.slice(0,50)}</p>
        <h4 class="card-text fw-bold text-center">$ {price}</h4>
      </div>
      <Link to={`/clock/${_id}`}>
        <button className="btn btn-dark text-white mx-5 px-4 mb-3 mt-3"> Details <i class="fa-solid fa-arrow-right px-2"></i></button>
        </Link> 
  </div>
</div>

        </div>
    );
};

export default IndividualWatch;