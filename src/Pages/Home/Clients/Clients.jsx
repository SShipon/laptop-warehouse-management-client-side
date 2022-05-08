import React from 'react';
import Slider from "react-slick";
import'./Clients.css'
import { Col, Container, Row } from 'react-bootstrap';
const Clients = () => {
  var settings = {
     autoplay:true,
      dots: true,
      infinite: true,
     speed: 500,
    vertical: true,
     verticalSwiping:true,
      slidesToShow: 1,
      slidesToScroll: 1,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <Container className='text-center my-5'>
     <h2 className='text-color'>CLIENT SAYS</h2>
      </Container>
      <Slider {...settings}>
        <div className=''>
             <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='image-size' src="https://i.ibb.co/qWz9gCq/template-1.png" alt="" />
              <h3>Mahmdul Hasan Raju</h3>
              <h6><strong>CEO:</strong> Lenovo Computer</h6>
              <p>all the different laptops types  starting from gaming to content creating. These laptops are built   to withstand anything and continuously provide you with the same</p>
            </Col>
             </Row>
          </div>
          <div className=''>
             <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='image-size' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
              <h3>Rakib Hasan</h3>
              <h6><strong>CEO:</strong> Apple Computer</h6>
              <p>all the different laptops types  starting from gaming to content creating. These laptops are built   to withstand anything and continuously provide you with the same</p>
            </Col>
             </Row>
          </div>
          
          <div className=''>
             <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='image-size' src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
              <h3>Md.Tuhin</h3>
              <h6><strong>CEO:</strong> Dell Computer</h6>
              <p>all the different laptops types  starting from gaming to content creating. These laptops are built   to withstand anything and continuously provide you with the same</p>
            </Col>
             </Row>
          </div>
          <div className=''>
             <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <img className='image-size' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h3>Nurul Huda</h3>
              <h6><strong>CEO:</strong> Hp Computer</h6>
              <p>all the different laptops types  starting from gaming to content creating. These laptops are built   to withstand anything and continuously provide you with the same</p>
            </Col>
             </Row>
          </div>
        
        </Slider>
    </>
  );
};

export default Clients;