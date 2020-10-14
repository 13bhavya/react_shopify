import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { Container, Icon } from 'atomize';
import { ShopperContext } from '../Context/ShopContext';

function HeaderComponent() {

    const { openCart } = useContext(ShopperContext)

    return (

        <Navbar bg="light" variant="light" expand="sm" >
            <NavbarBrand>Shopify Buy</NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink>
                        <Link id="RouterNavLink" style={{ fontSize: "1.2rem", color: "black", backgroundColor: "cream", textDecoration: "none" }} to="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link id="RouterNavLink" style={{ fontSize: "1.2rem", color: "black", backgroundColor: "cream", textDecoration: "none" }} to="/men">Mens</Link>
                    </NavLink>
                    <NavLink>
                        <Link id="RouterNavLink" style={{ fontSize: "1.2rem", color: "black", backgroundColor: "cream", textDecoration: "none" }} to="/women">Woman</Link>
                    </NavLink>
                    <NavLink>
                        <Link id="RouterNavLink" style={{ fontSize: "1.2rem", color: "black", backgroundColor: "cream", textDecoration: "none" }} to="/fashion">Fashion</Link>
                    </NavLink>
                    <NavLink>
                        <Link id="RouterNavLink" style={{ fontSize: "1.2rem", color: "black", backgroundColor: "cream", textDecoration: "none" }} to="/kids">Kids</Link>
                    </NavLink>
                </Nav>
                <Form inline>
                    <Icon m={{ r: "5px" }} name="Settings" size="20px" />
                    <Link to="/profile">
                        <Icon m={{ r: "5px" }} name="User" size="20px" />
                    </Link>
                    <Button onClick={() => openCart()} variant="outline-primary">Cart</Button>
                </Form>
            </NavbarCollapse>
        </Navbar>
    )
}

{/* <Alert dismissible variant="info">
                    <Alert.Heading>
                        Oh ! Snap, you got an error !
                    </Alert.Heading>
                    <p>
                        Change this and that and try again
                    </p>
                </Alert> */}

export default HeaderComponent
