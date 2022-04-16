import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Articles.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = () => {
    
    return (
      <div className='services'>
        <div className='container'>
            <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/icon7.png' className='img-fluid d-flex mx-auto'></img>
          <h1 className='fw-bold text-center mb-3'>Articles & Tips</h1>
          <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
        <CardGroup className='mb-3'>
  <Card className='me-2 card'>
    <Card.Img variant="top" src="https://shtheme.info/demosd/orgafe/wp-content/uploads/2019/04/blog1.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'> EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.info/demosd/orgafe/wp-content/uploads/2019/04/blog2.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'>EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.info/demosd/orgafe/wp-content/uploads/2019/04/blog3.jpg" className='img-fluid w-75 d-flex mx-auto' />
    <Card.Body>
      <Card.Title className='text-center'>EXCEPTEUR SINT OCCAECAT CUPIDATAT</Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link ><button className='text-dark  btn-service'>Read</button></Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
       
        </div>
        </div>
    );
};

export default Articles;