import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddMenu.css';

const AddMenu = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-menu'>
            <h1 className='text-center fw-bold mb-5 mt-5 text-dark'>Please Add a Menu !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Menu Name" />
      <input {...register("description",)} placeholder="Menu Description"/>
      <input type="number" {...register("price", )} placeholder="Menu Price"/>
      <input type="number" {...register("rating", )} placeholder="Menu Rating"/>
      <input {...register("img",)} placeholder="Menu Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddMenu;