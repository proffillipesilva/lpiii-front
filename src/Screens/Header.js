import React, {useState} from 'react'
import { Nav, Navbar, Offcanvas, Button, Form } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';

const Header = () => {
    

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">&nbsp; &nbsp;  <i class="fa fa-cart-plus" aria-hidden="true"></i> My Market </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#"><Link to={'users'} style={{color: "white", textDecoration: "none"}} >
                <i class="fa fa-users" aria-hidden="true"></i> Users </Link>  </Nav.Link>
            <Nav.Link href="#"><Link to={'user-details'} style={{color: "white", textDecoration: "none"}} > User Details </Link>  </Nav.Link>
            <Nav.Link href="#"><Link to={'user-form'} style={{color: "white", textDecoration: "none"}}> User Form </Link>  </Nav.Link>
            <Nav.Link href="#"><Link to={'products'} style={{color: "white", textDecoration: "none"}}> Products </Link>  </Nav.Link>
            <Nav.Link href="#"><Link to={'checkout'} style={{color: "white", textDecoration: "none"}}> Checkout </Link>  </Nav.Link>
            <Button variant="primary" onClick={handleShow} style={{position: "absolute", right: "50px"}}>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </Button>
        </Nav>
    </Navbar>

    

    <Offcanvas show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> &nbsp; &nbsp;  <i class="fa fa-cart-plus" aria-hidden="true"></i> My Market</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <p><Link to={'users'} style={{color: "black", textDecoration: "none"}} > 
       <i class="fa fa-users" aria-hidden="true"></i> Users </Link> </p>
         <p>   <Link to={'user-details'} style={{color: "black", textDecoration: "none"}} > User Details </Link> </p>
        <p>   <Link to={'user-form'} style={{color: "black", textDecoration: "none"}}> User Form </Link>  </p> 
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Header