import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const ProductDetails = () => {
  const { register, handleSubmit } = useForm();
    const { itemId } = useParams()
    const [product, setProduct] = useState({})
  
    useEffect(() => {
        const url = http://localhost:5000/product/${itemId}
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data) )

    }, [])
  
  const onSubmit = add => { 
      
  }
   
    return (
       <div className="container w-50 h-20 justify-content-center my-5">
            <div className="row col-sm-12">
                 <div class="card text-center mb-3  p-4">
                     <img  className="mx-auto" src={product.img} alt="" />
                      <div class="card-body">
                       <h5 class="card-title"><strong>Name:</strong>{product.name}</h5>
                        <p class="card-text"><strong>Description:</strong>{product.description}</p>  
                        <p class="card-text"><strong>Price:</strong>{product.price}</p>  
                        <p class="card-text"><strong>Quantity:</strong>{product.quantity}</p>  
                            </div>
                        </div>
                    </div>
  
               
               <div className="row col-sm-12">
                 <div class="card text-center mb-3  p-4">
                 <div className='w-75 mx-auto my-2 shadow-lg p-5 bg-body rounded'>
                <h5 className='text-center my-2'>Add Quantity and Delivered</h5>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} required />
                <br />
                <input className='btn-hero' type="submit" value='Add Quantity' />
                <br />
           <input className='btn-hero' type="submit" value='Delivered' />
        </form>
       </div>
      </div>
    </div>
  </div>
    );
};

export default ProductDetails;



/* <form onSubmit={handleUpdateQuantity} className="mb-3 d-flex ">
            <input
              className=""
              type="number"
              name="quantity"
              placeholder="Your Quantity"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <button
            onClick={handleDelivered}
            className="btn-update text-decoration-none text-white"
          >
            Delivered
          </button>
          <p className="text-center mt-3">
            warehouse{" "}
           {/*  <Link
              className="sign-link fw-bold pe-auto text-decoration-none"
              to="/manageItems"
            >
              manage Inventories
            </Link> */}
          </p> */