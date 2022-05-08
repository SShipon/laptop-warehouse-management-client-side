
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../Hooks/useProducts.jsx';

const MangeInventoryProduct = ({product}) => {
  const { _id, img, name, description, price, quantity, supplier } = product;
  const [setProduct]=useProduct()
  const navigate = useNavigate()
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
    
  }

  const handleDeleted = id => {
    const proceed = window.confirm('Are You sure ?')
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`
      fetch(url, {
        method:'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = product.filter(product => product._id !== id)
          setProduct(remaining)
      })
    }
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
             <div className="row g-2 justify-content-between">
             <div className="col-sm-12 col-md-6">
            <Button onClick={() => navigateToProductDetail(_id)}>Updated</Button>
             </div>
             <div className="col-sm-12 col-md-6">
              <Button onClick={()=>handleDeleted(_id)} variant="danger"><i class="fa-solid fa-trash"></i> Deleted</Button>
            </div>
               </div>
          </div>
        </div>
      </div>
    );
};

export default MangeInventoryProduct;