import React, { useEffect, useState } from 'react';
import useProduct from '../../../Hooks/useProduct.jsx';
import Loding from '../../Loding/Loding';
// import Item from '../Home/Item/Item';
import Item from '../Item/Item'
import './Items.css'

const Items = () => {

    const [items, setItems] = useProduct();
    if(items.length === 0){
        return <Loding></Loding>
    }

    return (
        <div>
            <div className='container'>
                <div className=' row items-section'>
                    {
                        items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;