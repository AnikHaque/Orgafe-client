import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Services.css';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    
    return (
      <div className='services'>
        <div className='container'>
          <h1 className='fw-bold text-center mb-3'>Our Services</h1>
          <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor<br></br> incididunt labore dolore magna aliqua minim veniam</p>
        <CardGroup className='mb-3'>
  <Card className='me-2 card'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser1.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Organic Tomato</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <br></br>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser3.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Organic Fish</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser2.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Orange</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        <CardGroup>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser1.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Natural Foods</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser2.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Meat</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service '>Read</Link>
    </Card.Body>
    
  </Card>
  <Card className='me-2'>
    <Card.Img variant="top" src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/ser3.png" className='img-fluid w-25 d-flex mx-auto' />
    <Card.Body>
      <Card.Title><h3 className='text-center'>Fresh Guava</h3></Card.Title>
      <Card.Text className='text-center'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
      </Card.Text>
      <Link className='text-dark  btn-service'>Read</Link>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        </div>
        </div>
    );
};

export default Services;