import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem.jsx';

const MyItems = () => {
    const [users, setUsers]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data =>setUsers(data) )

    }, [])

    const handelDeleted = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                console.log(data);
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
            })
        }
    }
    return (
        <div className='container mt-5'>
            <h3 className='text-center my-5'>My User Items</h3>
            <div className='row'>
                {
                    users.map(user => <MyItem
                        user={user}
                        key={user._id}
                        handelDeleted={handelDeleted}
                    ></MyItem>)
               }
            </div>
      </div>  
    );
};

export default MyItems;