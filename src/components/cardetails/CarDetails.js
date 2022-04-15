import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './CarDetails.css'
 import useAuth from '../../hooks/useAuth';
// import Footer from '../footer/Footer';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const CarDetails = () => {
    const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://aqueous-garden-43967.herokuapp.com/carbooking",data)
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
         fetch(`https://aqueous-garden-43967.herokuapp.com/car/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
        <div className=''>
<Container fluid>
  <Row>
    <Col className='shadow' sm={12} md={12} lg={6}><img src={food.img} className='img-fluid w-75 individual-image mx-auto d-flex mt-5'></img></Col>
    <Col sm={12} md={12} lg={6}>
    <div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12  pt-5 mt-5 pb-5 bg-dark">
    <h1 className='fw-bold text-white mx-5'>  {food.name}</h1>
        <br></br>
        <p className='text-light mx-5'><b>Price:</b> {food.price}</p>
        <p className='text-light mx-5 des'>{food.description}</p>      
    </div>
  </div>
</div>

     
        
    </Col>
  </Row>
</Container>
<h1 className='fw-bold text-center fs-1 mb-5'>Book an Order</h1>

<form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-center w-75 mx-auto pt-5 pb-5 px-5 pe-5 mb-5">
     <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='w-100 p-2' defaultValue={user.email} />
<br></br>
<br></br>
     <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='w-100 p-2' defaultValue={user.displayName} />
     <br></br>
<br></br>
     <input {...register("foodname", { required: true, })} placeholder="Car Name" className='w-100 p-2' />

     <br></br>
<br></br>
     <input type="text" {...register("price")}placeholder="Car Price" className='w-100 p-2' />
     <br></br>
<br></br>
<input {...register("image", { required: true, maxLength: 920 })} placeholder="Car Image" className='w-100 p-2' />
<br></br>
<br></br>
     <input {...register("address", { required: true, })} placeholder="Delivery Address" className='w-100 p-2'/>
     <br></br>
<br></br>
     <input type="submit" className='w-50' value='Place Order' />
   </form> 
   
 </div>
    );

    }
export default CarDetails;