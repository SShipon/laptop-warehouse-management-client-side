import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import'./About.css'
const About = () => {
    return (
        <Container>
            <Row className='d-flex align-items-center my-5'>
                <Col md={6} sx={12}>
                    <h1>Buy Laptop and Notebook at best price in Bangladesh</h1>
                    <p>Star Tech has a wide variety of Laptop & Notebook Brands with the latest collection that is available in Bangladesh. Our category of stock includes all the word recognized brands such as HP, Asus, Acer, Lenovo, Dell, Microsoft Surface Pro, Mi & MSI. Among these laptop & Notebooks, we have variety in color & shape with a competitive laptop price in BD. Regarding configuration, we can provide i3, i5 & i7 laptops & Notebooks of any brand with the latest generation available in the market. For the gamer, we have exclusive gaming laptops in our stock that you really need to look. If you are looking for laptop accessories at the best price then Star Tech is the solution for you. We have laptop backpacks, screens, adapter, HDD Caddy, Cooler, DVR Writer & many more. Choose good quality laptop parts for your precious laptop. Star Tech is the leading laptop & laptop accessories retail shop operating in all the major cities including Dhaka, Chittagong, Rangpur, Khulna in Bangladesh. We have efficient laptop experts in all the branches to assist you with the best guidance for buying the right one. Get your desired laptop at the lowest possible price in anywhere in Bangladesh through our online delivery.</p>
                </Col>
                <Col md={6} sx={12}>
                   <img className='img-container' src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;