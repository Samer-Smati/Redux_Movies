import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to='/'>WATCH MOVIES</Navbar.Brand>
                <Nav className="me-auto"> 
                <Nav.Link as={Link} to='/'>Home</Nav.Link> 
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
