import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Choose.css';
const Choose = () => {
    return (
        <div className='mt-5'>
            <div class="container">
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 ">
      <img src='https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/bg1.png' className='img-fluid  about-image mt-4 w-100'></img>
      
    </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
         <h1 className='fs-1 about-heading pb-3 text-dark mx-4'>WHY CHOOSE US</h1>
      <p className='text-secondary mx-4'>Lorem ipsum dolor amet consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
</p>
<br></br>
<br></br>
<Container>
  <Row className='mb-5'>
  <Col sm={12} md={12} lg={3}>
   <img src='https://www.seekpng.com/png/detail/869-8699678_tick-black-outline-white-clip-art-black-check.png' className='img-fluid w-75 mb-3'></img>
    </Col>
    <Col sm={12} md={12} lg={9}>
    
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
  </Row>
  <Row className='mb-5'>
     <Col sm={12} md={12} lg={3}>
     <img src='https://www.seekpng.com/png/detail/869-8699678_tick-black-outline-white-clip-art-black-check.png' className='img-fluid w-75 mb-3'></img>
    </Col>
    <Col sm={12} md={12} lg={9}>
 
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
   
  </Row>
  <Row>
    <Col sm={12} md={12} lg={3}>
    <img src='https://www.seekpng.com/png/detail/869-8699678_tick-black-outline-white-clip-art-black-check.png' className='img-fluid mb-3 w-75'></img>
    </Col>
    <Col sm={12} md={12} lg={9}>
   
      <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
    </Col>
  
  </Row>
</Container>

    </div>
    
    
  </div>
 
</div>

        </div>
    );
};

export default Choose;