import React from 'react';
import { useProduct } from '../../../Hooks/useProducts.jsx';

import Product from '../Product/Product.jsx';

const Products = () => {
    const [products] = useProduct()
    return (
         <div className="my-5 container">
        <h1 className="text-primary text-center my-5">
         Best 6 Products 
        </h1>
         <div className="g-5 row">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;