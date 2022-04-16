import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './Farmers.css';

const Farmers = () => {


    return (
        <div className='farmers'>
            <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/icon5.png' className='d-flex mx-auto'></img>
            <h1 className='fw-bold text-center'>Our Farmers</h1>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
            <Container>
  <Row>
    <Col sm={12} md={12} lg={3}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/team1.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/team2.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/team3.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/team4.jpg' className='img-fluid'></img>
    </Col>
   
    
  </Row>
  
</Container>
            
  </div>
    )}     


export default Farmers;