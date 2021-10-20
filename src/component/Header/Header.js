import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user, logout} = useAuth()
    return (
            <>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                    <Navbar.Brand href="/home">Fitness - MONSTER</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                    <Nav.Link href="/home#home">Home</Nav.Link>
                    <Nav.Link href="/home#services">Care Services</Nav.Link>
                    <Nav.Link href="/home#aboutus">About Us</Nav.Link>
                    <Nav.Link href="/home#testi">Testimonials</Nav.Link>
                    <Nav.Link as = {Link} to='/angles'>MemberShip Plan</Nav.Link>
                    
                    {/* <Nav.Link href="/login">Login</Nav.Link> */}
                    
                    <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    {/* <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text> */}
                    <Navbar.Text>
                    {user?.email && <span>Signed in as : {user.displayName ? user.displayName : user.email}<button onClick={logout}>  logout </button></span> }
                        
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar> 

            </>
    );
};

export default Header;