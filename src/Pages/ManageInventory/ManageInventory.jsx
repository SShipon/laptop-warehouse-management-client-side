import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProduct } from '../../Hooks/useProducts.jsx';
import MangeInventoryProduct from '../MangeInventoryProduct/MangeInventoryProduct.jsx';

const ManageInventory = () => {
    const [products] = useProduct()
    return (
      <>
          <div className="my-5 container">
        <h1 className="text-primary text-center my-5">
         Product:{products.length}
        </h1>
         <div className="g-5 row">
          {products.map((product) => (
            <MangeInventoryProduct key={product._id} product={product}></MangeInventoryProduct>
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