import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch("https://dry-temple-28116.herokuapp.com/product")
        .then(res => res.json())
        .then(data => setProduct(data))
     },[])
    
      return [products, setProduct];
};

export  {useProduct};