import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import './SiteNavBar.css'
export const SiteNavBar = () => {
    return(
        <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className={'link-style'}>Home</Link>
                        <Link to={'/add'} className={'link-style'}>Add User</Link>
                        <Link to={'/remove'} className={'link-style'}>Remove User</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}