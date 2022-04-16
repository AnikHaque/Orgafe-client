import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Review.css';

const headingService={
    textAlign:'center',
    fontSize:'40px',
    fontWeight:'bolder'
}

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post("http://localhost:5000/reviews",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
    return (
        <div className="add-service">
            <h2 style={headingService} className='text-white fw-bolder mt-5 mb-5'>Give a Feedback!!!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true,})} placeholder="name"  defaultValue={user.displayName} />
      <textarea {...register("description")} placeholder="Your Review Please!!"/>
      <input type="number" {...register("price")}placeholder="Give Us A Rating"/>
      <input {...register("img")} placeholder="Your Image" />
      <input type="submit" value="Submit Please" />
    </form>
        </div>
    );
};

export default Review;