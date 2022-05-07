
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MangeInventoryProduct = ({product}) => {
     const { _id, img, name, description, price,quantity,supplier } = product;
  const navigate = useNavigate()
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
    
  }
    
    return (
        <div className=" col-sm-12 col-md-6 col-lg-4 ">
        <div className="card" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-bold">Price: $ {price}</p>
            <p>Quantity: { quantity}</p>
            <p className="card-text">{description}</p>
             <p className="card-text">{supplier}</p>
             <Button onClick={() => navigateToProductDetail(_id)}>
             Updated
            </Button>
          </div>
        </div>
      </div>
    );
};

export default MangeInventoryProduct;