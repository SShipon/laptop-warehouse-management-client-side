import React from 'react';
import { useProduct } from '../../Hooks/useProducts.jsx';
import MangeInventoryProduct from '../MangeInventoryProduct/MangeInventoryProduct.jsx';

const ManageInventory = () => {
    const [products] = useProduct()
    return (
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
    );
};

export default ManageInventory;