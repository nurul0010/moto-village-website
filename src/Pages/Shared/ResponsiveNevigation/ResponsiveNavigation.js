import { Box } from '@mui/system';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';

const ResponsiveNavigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Moto Village</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink to='/explore'><Button style={{ color: 'white' }}>Explore</Button></NavLink>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink to='/dashboard'><Button style={{ color: 'white' }}>Dashboard</Button></NavLink>
                                    <Button onClick={logOut} variant="text" style={{ color: 'white' }}>Logout</Button>
                                </Box>
                                :
                                <NavLink to='/login'><Button style={{ color: 'white' }}>Login/Registration</Button></NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavigation;