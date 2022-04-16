import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './Products.css';

const Products = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('https://cryptic-woodland-49347.herokuapp.com/products')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
           <img src='https://shtheme.info/demosd/orgafe/wp-content/uploads/2019/04/icon8.png' className='img-fluid image-product'></img>
             <h1 className='text-center fw-bold mb-5'>OUR Products Collections</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
                {
                    food.map(foods => <IndividualProduct
                        key={foods._id}
                        foods={foods}
                    ></IndividualProduct>)
                }
                </div>
                </div>
            </div>
           
  </div>
    )}     


export default Products;