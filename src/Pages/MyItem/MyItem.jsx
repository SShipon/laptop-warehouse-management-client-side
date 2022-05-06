import React from 'react';
import { Button } from 'react-bootstrap';

const MyItem = ({ user,handelDeleted }) => {
    const {_id,description,email,quantity,name,price, img, supplier } = user;
    return (
        
          <div className=" col-sm-12 col-md-6 col-lg-4 ">
        <div className="card" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-">{name}</h5>
          
            <p className="text-bold"><strong>Email:</strong> {email}</p>
            <p className="text-bold"><strong>Price:</strong> ${price}</p>
            <p><strong>Quantity:</strong> { quantity}</p>
            <p className="card-text"><strong>Description:</strong> {description}</p>
             <p className="card-text"><strong>Supplier Name: </strong>{supplier}</p>
             <Button variant="danger" onClick={()=>handelDeleted(user._id)}>
             <i class="fa-solid fa-trash"></i> Deleted
            </Button> 
          </div>
        </div>
      </div>
      
    );
};

export default MyItem;