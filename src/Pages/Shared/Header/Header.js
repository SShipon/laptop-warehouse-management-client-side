import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
      signOut(auth)
    }

    return (
        <Navbar className='navbar' bg="" expand="lg" sticky='top'>
  <Container>
    <Navbar.Brand as={Link} to="/"><img src='https://i.ibb.co/4KdGnCc/images-removebg-preview.png' height="40" alt="" srcset="" /> Laptop House</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
        {
          user && <>
          <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
          <Nav.Link as={Link} to="/addItems">Add Items</Nav.Link>
          <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
          </>
        }
        {
          user?
          <button className='btn-hero' onClick={handleSignOut}>SignOut</button>
          :
          <Nav.Link className='fw-bold' as={Link} to="/login">Login</Nav.Link>
        }
        <Nav.Link>{user?.email.slice(0,15)}</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;