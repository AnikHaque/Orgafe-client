import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './Deal.css';

const Deal = () => {


    return (
        <div className='deal'>
            
            <Container>
  <Row>
    <Col sm={12} md={12} lg={6}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/deal.png' className='img-fluid '></img>
    </Col>
    <Col sm={12} md={12} lg={6}>
        <h1 className='deal-heading'>Deal Of The Day</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna laudantium totam rem aperiam eaque ipsa quae inventorec.</p>
        <Container>
  <Row>
    <Col sm={3} md={3} lg={3} className='bg-light deal-time text-dark p-3 text-center me-5'>00
<br></br>DAYS
</Col>
    <Col sm={3} md={3} lg={3} className='bg-light deal-time text-dark p-3 text-center me-5'>
    00
<br></br>DAYS
    </Col>
    <Col sm={3} md={3} lg={3} className='bg-light deal-time text-dark p-3 text-center'>
    00
<br></br>DAYS
    </Col>
  </Row>
 <button className='deal-shop text-white fw-bold'>Shop Now</button>
</Container>
    </Col>
  </Row>
  
</Container>
  </div>
    )}     


export default Deal;