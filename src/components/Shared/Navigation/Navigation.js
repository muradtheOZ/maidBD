import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className='p-2' to="/">Home</Link>
          <Link className='p-2' to="/orders">Orders</Link>
          <Link className='p-2' to="/admin">Admin</Link>
          <Link className='p-2' to="/details">Details</Link>
          <Link className='p-2' style={{border:'1px solid orange', backgroundColor:"black"}} to="/login">Hello</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Navigation;