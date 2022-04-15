import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualCar from '../individualcar/IndividualCar';


import './Cars.css';

const Cars = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('https://aqueous-garden-43967.herokuapp.com/car')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">Our Cars Collections</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
                {
                    food.map(foods => <IndividualCar
                        key={foods._id}
                        foods={foods}
                    ></IndividualCar>)
                }
                </div>
                </div>
            </div>
           
  </div>
    )}     


export default Cars;