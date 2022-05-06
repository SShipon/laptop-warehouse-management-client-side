import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProduct } from '../../Hooks/useProducts.jsx';
import MangeInventoryProduct from '../MangeInventoryProduct/MangeInventoryProduct.jsx';

const ManageInventory = () => {
  const [products, setProduct] = useProduct()
  
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
          const remaining = products.filter(product => product._id !== id)
          setProduct(remaining)
      })
    }
  }
    return (
      <>
          <div className="my-5 container">
        <h1 className="text-primary text-center my-5">
         Product:{products.length}
        </h1>
         <div className="g-5 row">
          {products.map((product) => (
            <MangeInventoryProduct key={product._id} product={product}
             handleDeleted={handleDeleted}
            ></MangeInventoryProduct>
          ))}
        </div>
      </div>
      <div className='my-5 text-center'>
          <Link to='/addItems'> <Button variant="success" style={{height:'40px',width:'300px'}}>Add Items</Button></Link>
         </div>
      
      </>
    );
};

export default ManageInventory;