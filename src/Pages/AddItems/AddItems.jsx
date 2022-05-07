import React from 'react';
import { useForm } from "react-hook-form";
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
            console.log(result);
        })

    };
        
    

    return (
        <div className='w-50 mx-auto'>
            <p>Add items</p>
     <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder='Name'  {...register("Name", { required: true, maxLength: 20 })} /> 
        <input className='mb-2' placeholder='Price'  type="number" {...register("price")} />
        <input className='mb-2' placeholder='Quantity'  type="number" {...register("quantity")} />
         <textarea className='mb-2' placeholder='Description'  {...register("description")} />
        <input className='mb-2' placeholder='Photo URL'  type="img" {...register("img")} />
        <input type="submit" value='Add Items' />
    </form>
        </div>
    );
};

export default AddItems;