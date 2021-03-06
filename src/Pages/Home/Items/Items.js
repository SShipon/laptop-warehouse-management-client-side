import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Loding from '../../Loding/Loding';
// import Item from '../Home/Item/Item';
import Item from '../Item/Item'
import './Items.css'

const Items = () => {

    const [items, setItems] = useItems();
    if(items.length === 0){
        return <Loding></Loding>
    }

    return (
        <div>
            <div className='container'>
                <h3 className='text-center my-5 text-color'>Best 6 Products</h3>
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