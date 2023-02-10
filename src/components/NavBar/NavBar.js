import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {FaHospital } from "react-icons/fa";
import './NavBar.css'

function NavBar() {
  return (
    <React.Fragment>
        <Navbar bg="dark"  variant="dark"k expand="lg">
      <Container>
        <Navbar.Brand href="#home" as={Link} to={"/"} >  <span className='icon-navbar'><FaHospital/></span> 
         <span className='title'> Hospital   <span className='text-color'>Management</span>  </span>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  )
}

export default NavBar