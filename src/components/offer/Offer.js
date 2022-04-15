import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Offer.css';
const Offer = () => {
 
    return (
        <div>
           <Container>
             <h1 className='text-center'>OUR OFFERS</h1>
             
    <div
    class="toast show mt-2 mb-2"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    >
    <div class="toast-header">
          <p class="me-auto fw-bold text-dark mt-2">20% off on your next booking</p>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
         >
        </button>
    </div>
    </div>

  <Row>
    <Col sm={12} md={6} lg={6}>
    
    <img src='https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-1.jpg' className='img-fluid mb-2 offer-image'></img>

    
  <Row>
    <Col sm={12} md={6} lg={6}>
    <img src='https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-2.jpg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={6} lg={6}>
    <img src='https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-3.jpg' className='img-fluid'></img>
    </Col>
  </Row>
  

    </Col>
    <Col sm={12} md={6} lg={6}>
    <img src='https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/latest-offers/img-4.jpg' className='img-fluid'></img>
    </Col>
  </Row>
  
</Container>
        </div>
    );
};

export default Offer;