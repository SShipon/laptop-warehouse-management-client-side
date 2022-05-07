import React, { useEffect, useState } from 'react';
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
        <div className='container'>
        <div className="g-5 row">
        <div className=" col-sm-12">
        <div className="card" style={{ width: "100%" }}>
          <img src={product.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="text-bold">Price: $ {product.price}</p>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
     </div>
  </div>
        </div>
    );
};

export default ProductDetails;