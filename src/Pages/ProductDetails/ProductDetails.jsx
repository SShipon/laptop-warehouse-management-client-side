import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId, item]);

  // quantity operations
  const handleDelivered = (e) => {
    e.preventDefault();
    let quantity = item?.quantity;
    quantity = parseInt(quantity) - 1;
    if (quantity < 0) {
      return alert("Quantity can not be less then zero");
    }

    const url = `http://localhost:5000/quantity/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem({ ...data, quantity: quantity });
        toast("Successfully Delivered");
      });
  };

  //Add quantity
  const handleUpdateQuantity = (e) => {
    e.preventDefault();
    let quantity = item?.quantity;
    const addQuantity = parseInt(e.target.quantity.value);
    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      const updateInventory = { quantity };
      const url =` http://localhost:5000/quantity/${itemId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInventory),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("quantity Updated");
          e.target.reset();
        });
    } else {
      alert("Please insert positive number of quantity");
      e.target.reset();
      return;
    }
  };

  return (
    <>
          <div className="container w-50 h-20 justify-content-center my-5">
     <div className="row col-sm-12">
                 <div class="card text-center mb-3  p-4">
                     <img  className="mx-auto" src={item.img} alt="" />
                      <div class="card-body">
                       <h5 class="card-title"><strong>Name:</strong>{item.name}</h5>
                        <p class="card-text"><strong>Description:</strong>{item.description}</p>  
                        <p class="card-text"><strong>Price:</strong>{item.price}</p>  
                        <p class="card-text"><strong>Quantity:</strong>{item.quantity}</p>  
                            </div>
                        </div>
                    </div>
          <form onSubmit={handleUpdateQuantity} className="mb-3 d-flex ">
            <input
              className=""
              type="number"
              name="quantity"
              placeholder="Your Quantity"
            />
            <Button  type="submit" className="ms-2">
              Add Quantity
          </Button>
          <Button  variant="success"
            onClick={handleDelivered}
            className=" ms-2 text-white"
          >
            Delivered
          </Button>
          </form>
          

        </div>
    

      <div className='my-5 text-center'>
          <Link to='/inventory'> <Button variant="success" style={{height:'40px',width:'300px'}}>manage Inventories</Button></Link>
         </div>

    </>
  );
};

export default ProductDetails;
