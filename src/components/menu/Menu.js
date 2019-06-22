import React, { Component } from 'react'
import {
    Navbar, 
    Nav, 
    Image,
} from 'react-bootstrap';
import './Menu.css';

import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png';
import { URL_HOME, URL_DIAGNOSTIC } from '../../utils/variables/variables';

export default class Menu extends Component {
    render() {
        return (
            <>
            <Navbar  className="app-oficina-theme" expand="lg">
            <Navbar.Brand className="text-white">
                <Link to="/" className="menu-home text-decoration-none">
                    <Image className="mr-2 center" src={logo} rounded fluid width={20} />
                    Oficina App
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-muted">
                <Nav.Link>
                    <Link to={URL_HOME} className="menu-secondary text-decoration-none">
                        Ínicio
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={URL_DIAGNOSTIC} className="menu-secondary text-decoration-none">
                        Diagnóstico
                    </Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}
