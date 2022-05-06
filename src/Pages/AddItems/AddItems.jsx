import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css';
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
           
        })
        .then(res=>res.json())
            .then(result => {
             const url = `http://localhost:5000/user`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
           
        })
        .then(res=>res.json())
            .then(result => {
                console.log(result);
            
        })
            })
        

    };
        
    

    return (
    <div className='w-50 mx-auto my-2 shadow-lg p-5 bg-body rounded'>
    <h3 className='text-center my-2'>Add Product</h3>
     <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="">Name</label>
         <input className='mb-2' placeholder='Supplier'  type="name" {...register("supplier")} required/> 
         <label htmlFor="">Email</label>
        <input className='mb-2' placeholder='Your Email'  {...register("email", { required: true, maxLength: 20 })} required/> 
         <label htmlFor="">Product Name</label>
        <input className='mb-2' placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} required /> 
         <label htmlFor="">Images URL </label>
           <input className='mb-2' placeholder='Photo URL'  type="img" {...register("img")} />
           <label htmlFor="">Description</label>
           <textarea className='mb-2' placeholder='Description'  {...register("description")} required/>
           <label htmlFor="">Price</label>
        <input className='mb-2' placeholder='Price'  type="number" {...register("price")} required/>
        <label htmlFor="">Quantity</label>
        <input className='mb-2' placeholder='Quantity'  type="number" {...register("quantity")} required/>
       <input className='btn-hero' type="submit" value='Add Items' />
    </form>
</div>
    );
};

export default AddItems;