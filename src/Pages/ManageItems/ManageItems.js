import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import AllItems from "../AllItems/AllItems";
import "./ManageItems.css";
const ManageItems = () => {
  const [items, setItems] = useItems();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://laptop-warehouse-management-server-side.onrender.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
     
      <div className="container">
        <div className="AllItems-section mt-5">
          {items.map((item) => (
            <AllItems
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></AllItems>
          ))}
        </div>
        
        <div className="add-btn d-flex justify-content-center mt-4">
          <Link
            className="text-white fw-bold pe-auto text-decoration-none"
            to="/addItems"
          >
            <button className="text-center mt-3">Add Product</button>
          </Link>
        </div>
      </div>
   
  );
};

export default ManageItems;

{
  /* <AllItems key={item._id} item={item}></AllItems> */
}
