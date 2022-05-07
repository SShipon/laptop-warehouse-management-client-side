import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
const Blog = () => {
    return (
        <>
        <Container>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
                        <h5>1. Different between JavaScript and NodeJS</h5>
                        <p>1.<strong>JavaScript</strong> is a programming language where NodeJS is Javascript runtime environment.
                       <p>2.<strong> JavaScript</strong> can only be run in the browsers. On the other hand we can run Javascript outside the browser with the help of NodeJS.</p>
                       3.<strong> JavaScript</strong> based on client-side and NodeJSis server-side</p>
            </Col> 
             <Col md={6} xs={12}>
                    <h5>2.when should you use nodejs and when should you use mongodb</h5>
                        <p>When i need to run a web application server then i use <strong>Node.Js</strong> because of it's very fast, lightweight and easy to learn. On the other hand, when i need to store data i will use<strong>MongoDB5</strong> </p> 
                </Col> 
            </Row>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
                        <h5>3. Different between SQL and NoSQL</h5>
                        <p>1.<strong>SQL </strong> databases are relational and NoSQL databases are non-relational.
                       <p>2.<strong> SQL </strong>use structured query language and NoSQL have dynamic schemas for unstructured data</p>
                       3.<strong> SQL </strong> vertically scalable and NoSQL are horizontally scalable</p>
            </Col> 
             <Col md={6} xs={12}>
                    <h5>4. What is the purpose of jwt and how does it work</h5>
                       <p><strong>JSON Web Token</strong> is a standard used to create access tokens for an application.Which help developer to create extra security for avoiding hackers.
                      the server generates a token that certifies the user identity, and sends it to the client.The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.</p>
                </Col> 
            </Row>
         </Container>
        </>
    );
};

export default Blog;