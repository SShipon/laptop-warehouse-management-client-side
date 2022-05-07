
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const {_id, name, description, price, quantity, supplier, img } = item;
  const navigate = useNavigate();
  const navigateProductDetail = id =>{
    navigate(`/item/${id}`)
  }
  return (
    <div className=" col-sm-12 col-md-6 col-lg-4 ">
        <div className="card" style={{ width: "100%" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-">{name}</h5>
            <p className="text-bold"><strong>Price:</strong> ${price}</p>
            <p><strong>Quantity:</strong> { quantity}</p>
            <p className="card-text"><strong>Description:</strong> {description}</p>
             <p className="card-text"><strong>Supplier Name: </strong>{supplier}</p>
             <Button onClick={() => navigateProductDetail(_id)}>
            Updated stokes
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Item;
