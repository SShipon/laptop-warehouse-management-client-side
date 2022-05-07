import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import img from '../../../assets/img/download (3).jpg'
import auth from '../../../firebase.init.jsx';
 import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth);
   const handleSignOut = () => {
     signOut(auth);
   };

    return (
      <>
        <Navbar
          id="header-style"
          className="py-3 style-color"
          collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center"
            >
              <img
                className="header-img"
                src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-0.png"
                alt=""
              />
              <i className="fs-3 fw-bold ">
                Online<span className="word-color"> Store</span>
              </i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mx-auto ">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                {
                  user?.email &&
                  <>
                  <Nav.Link as={Link} to="/inventory">
                  Manage Inventory
                </Nav.Link>

                <Nav.Link as={Link} to="/addItems">
                 Add Items
                </Nav.Link>
                <Nav.Link as={Link} to="/myItems">
                 My Items
                </Nav.Link>
                  </>
                 }
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                <div className="mt-2">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL ? user?.photoURL : `${img}`}
                    alt=""
                  />
                  <span className="text-white mt-2 ms-2">
                    {user?.displayName && user.displayName}
                  </span>
                </div>
                {user ? (
                  <>
                    <button
                      className="btn btn-link  text-decoration-none"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="fs-5">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;