import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setProduct(data) )

    }, [])
   
    return (
      <div className='row'>
        <div className=" col-sm-12 col-md-6 col-lg-4 justify-content-center">
        <div className="card mx-auto" style={{ width: "100%" }}>
          <img src={product.img} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title"><span className='text-primary'>{product.name}</span></h5>
               <p className="card-text"><strong>Description:</strong> {product.description}</p>
            <p className="text-bold"><strong>Price:</strong> ${product.price}</p>
            <p className="text-bold"><strong>Quantity:</strong> { product.quantity}</p>

               <p><strong>Supplier Name:</strong> {product.supplier}</p>
             <Button>
             Updated
            </Button>
          </div>
        </div>
      </div>
         </div>
    );
};

export default ProductDetails;


/* 
   <h5 className="card-title"><span className='text-primary'>{name}</span></h5>
            <p className="text-bold"><strong>Price:</strong> ${price}</p>
            <p> <strong>Quantity:</strong> { quantity}</p>
            <p className="card-text"><strong>Description:</strong> {description}</p>
             <p><strong>Supplier:</strong> { supplier}</p>
*/