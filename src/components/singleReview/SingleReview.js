import React from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import ReactStars from "react-rating-stars-component";
import './SingleReview.css';
const SingleReview = ({ review }) => {
    // const {service} = props;
    const { _id, name,description,price, img } = review; 
    const firstExample = {
      size: 30,
      value:price,
      edit: false,
      
      
    };
    
    return (
        <div>
            
  <div class="col bg-light single-review">
  <h4 class="fw-bold">{name}</h4>
        <p class="">"{description}"</p>
        <ReactStars {...firstExample}  />
    
</div>

</div>
      
    );
          
          };
        
          
export default SingleReview;