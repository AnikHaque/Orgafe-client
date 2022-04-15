import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import './Facilities.css';
const Facilities = () => {
    return (
        <div className='bg-facilities p-5 container '>
           
           <Container>
  <Row className=''>
    <Col sm={12} md={3} lg={4} className=''>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <img src={logo1} className='d-flex mx-auto mb-2'></img>
    <Card.Title className='text-center'>Highly Secured </Card.Title>
    <Card.Text className='text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet
    </Card.Text>
    <Button variant="link" className='text-dark d-flex mx-auto'>Read More</Button>
  </Card.Body>
</Card>
    </Col>
    <Col sm={12} md={3} lg={4}>
    <Card style={{ width: '18rem' }}>
 
  <Card.Body>
  <img src={logo2} className='d-flex mx-auto mb-2'></img>
    <Card.Title className='text-center'>Trusted Agents</Card.Title>
    <Card.Text className='text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet
    </Card.Text>
    <Button variant="link" className='text-dark d-flex mx-auto'>Read More</Button>
  </Card.Body>
</Card>
    </Col>
    
    <Col sm={12} md={3} lg={4}>
    <Card style={{ width: '18rem' }}>
    <img src={logo3} className='d-flex mx-auto mb-2'></img>
  <Card.Body>
    <Card.Title className='text-center'>Free Support</Card.Title>
    <Card.Text className='text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet
    </Card.Text>
    <Button variant="link" className='text-dark d-flex mx-auto'>Read More</Button>
  </Card.Body>
</Card>
    </Col>
    
  </Row>
</Container>
           
        </div>
    );
};

export default Facilities;