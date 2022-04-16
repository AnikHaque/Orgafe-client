import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './Faq.css';

const Faq = () => {


    return (
        <div className=''>
            
            <Container>
  <Row>
    <Col sm={12} md={12} lg={5}>
        <h1 className='fw-bold faq-title'>Frequently Asked <br></br>Questions</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        <Accordion>
  <Accordion.Item eventKey="0" className='mb-3'>
    <Accordion.Header>Is Our Food Fully Organic?</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then mod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className='mb-3'>
    <Accordion.Header>Is Our Food Reasonable in Price?</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then mod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" className='mb-3'>
    <Accordion.Header>Is Our Food Imported?</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then mod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What is our Delivery System?</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then mod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Col>
    <Col sm={12} md={12} lg={7}>
        <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/bg3.png' className='img-fluid'></img>
    </Col>
  </Row>
  
</Container> 
  </div>
    )}     


export default Faq;