import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AnalyseProduct.css'
const AnalyseProduct = () => {
    return (
       <div className="container">
  <div class="row  row-cols-lg-5 g-2 g-lg-3 main-container">
    <div class="col">
      <div class="p-2 border bg-light d-flex justify-content-center align-items-center text-center bg-color-1">
           <i className="fa-solid fa-laptop"></i>
        <div className='ms-2'>
        <p>STOCK VEHICLES</p>
        <h6 className='fw-bold'>2355</h6>
     </div>
      </div>
    </div>
    <div class="col">
      <div class="p-2 border bg-light d-flex justify-content-center align-items-center text-center bg-color-2">
           <i className="fa-solid fa-flag"></i>
        <div className='ms-2'>
        <p>SOLD VEHICLES</p>
         <h6 className='fw-bold'>2735</h6>
     </div>
      </div>
    </div>
    <div className="col">
      <div className="p-2 border bg-light d-flex justify-content-center align-items-center text-center bg-color-3">
          <i className="fa-solid fa-people-group"></i>
        <div className='ms-2'>
        <p>HAPPY CLIENT</p>
         <h6 className='fw-bold'>2735</h6>
     </div>
      </div>
    </div>
    <div className="col">
      <div className="p-2 border bg-light d-flex justify-content-center align-items-center text-center bg-color-4">
           <i className="fa-solid fa-earth-americas"></i>
        <div className='ms-2'>
        <p>World Company</p>
        <h6 className='fw-bold'>2355</h6>
     </div>
      </div>
    </div>
    <div className="col">
      <div className="p-2 border bg-light d-flex justify-content-center align-items-center text-center bg-color-5">
           <i className="fa-brands fa-rev"></i>
        <div className='ms-2'>
        <p>TOTAL REVIEWS</p>
         <h6 className='fw-bold'>2375</h6>
     </div>
      </div>
    </div>
    
  </div>
</div>
    );
};

export default AnalyseProduct;


