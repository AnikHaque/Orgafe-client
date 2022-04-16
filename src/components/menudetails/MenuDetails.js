import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './MenuDetails.css'
 import useAuth from '../../hooks/useAuth';
// import Footer from '../footer/Footer';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const MenuDetails = () => {
    const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://cryptic-woodland-49347.herokuapp.com/menubooking",data)
       .then(res=>{
           if(res.data.insertedId){
              alert("Added Successfully.")
               reset();
              
               
           }
       })
   } 
     const {id} = useParams();
    const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`https://cryptic-woodland-49347.herokuapp.com/products/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
        <div className=''>
          <div className='menu-details'>
            <h1 className='menu-heading text-center'>{food.name}</h1>
            <div className='text-center'>
            <i class="fa-brands fa-facebook fs-2 me-3"></i>
            <i class="fa-brands fa-instagram-square fs-2 me-3"></i>
            <i class="fa-brands fa-youtube fs-2 me-3"></i>
            <i class="fa-brands fa-twitter-square fs-2"></i>
            </div>
           
          </div>
<Container fluid>
  <Row>
    <Col className='' sm={12} md={12} lg={6}>
      <img src={food.img} className='img-fluid w-75 mx-auto d-flex  img-details'></img></Col>
    <Col sm={12} md={12} lg={6}>
    {/* <div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 pb-5">
    <h1 className='fw-bold text-dark text-center mt-2'>  {food.name}</h1>
        <br></br>
        <p className='text-dark mx-5'><b>Price:</b> ${food.price}</p>
        <p className='text-dark mx-5 des'>{food.description}</p>      
    </div>
  </div>
</div> */}

<form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5 px-5 pe-5 mb-5">
     <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='w-100 p-2' defaultValue={user.email} />
<br></br>
<br></br>
     <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='w-100 p-2' defaultValue={user.displayName} />
     <br></br>
<br></br>
     <input {...register("foodname", { required: true, })} placeholder="Menu Name" className='w-100 p-2' />

     <br></br>
<br></br>
     <input type="text" {...register("price")}placeholder="Menu Price" className='w-100 p-2' />
     <br></br>
<br></br>
<input {...register("image", { required: true, maxLength: 920 })} placeholder="Menu Image" className='w-100 p-2' />
<br></br>
<br></br>
     <input {...register("address", { required: true, })} placeholder="Delivery Address" className='w-100 p-2'/>
     <br></br>
<br></br>
     <input type="submit" className='w-50' value='Place Order' />
   </form>
        
    </Col>
  </Row>
</Container>
<h1 className='text-center mt-5 mb-3'>Details:</h1>
<div className='container'>
<p className='text-dark mx-5 des'>{food.description}</p>  
<p className='mx-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>




 
   
 </div>
    );

    }
export default MenuDetails;