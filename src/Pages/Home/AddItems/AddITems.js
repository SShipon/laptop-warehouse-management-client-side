import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddItems.css";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import AddItemAnimation from "./AddItemAnimation.jsx";

const AddITems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.email = user?.email;

    console.log(data);
    const url = `https://laptop-warehouse-management-server-side.onrender.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast("Added New Item");
        console.log(result);
      });
  };

  return (
    <Container>
      <Row className="d-flex align-items-center my-5">
        <Col md={6} xs={12}>
           <div className="login-container">
      <div className="login-title">Add You Product</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input placeholder="User Email" value={user.email} disabled readOnly {...register("email", { required: true})} /> */}
        <input
          placeholder="Product Name"
          required
          {...register("name", { maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          required
          {...register("description")}
        />
        <input
          placeholder="Price"
          type="number"
          required
          {...register("price")}
        />
        <input
          placeholder="Quantity"
          type="number"
          required
          {...register("quantity")}
        />
        <input
          placeholder="Supplier Name"
          type="Name"
          required
          {...register("supplier")}
        />
        <input
          placeholder="Photo Url"
          type="text"
          required
          {...register("img")}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
        </Col>
        <Col md={6} xs={12}>
          <AddItemAnimation></AddItemAnimation>
        </Col>
      </Row>
       </Container>
  );
};

export default AddITems;

