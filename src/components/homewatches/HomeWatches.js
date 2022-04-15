import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IndividualWatch from '../individualwatch/IndividualWatch';



import './HomeWatches.css';

const HomeWatches = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('https://aqueous-garden-43967.herokuapp.com/clock')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">Our Watch Collections</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
                {
                    food.slice(0,4).map(foods => <IndividualWatch
                        key={foods._id}
                        foods={foods}
                    ></IndividualWatch>)
                }
                <Link to="/watches" className='fw-bold text-dark fs-5'>Show All</Link>
                </div>
                </div>
            </div>
  </div>
    )}     


export default HomeWatches;