import React from 'react';
import './AllITems.css'
import Roll from 'react-reveal/Roll';
const AllItems = ({item,handleDelete}) => {
    const {_id, name, price, img } = item;
   

    return (
        <Roll left>
            <div className='d-flex align-items-center justify-content-center allItem-info'>
            <div className='items-img'>
                <img className='' src={img} alt="" srcset="" />
            </div>
            <div>
                <h5 className='fw-bold'>{name}</h5>
                <div className='d-flex align-items-center justify-content-center'>
                    <h5>{price}$</h5>
                    {/* handle Delete button updated */}
                    <button disabled onClick={()=>handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
        </Roll>
    );
};

export default AllItems;