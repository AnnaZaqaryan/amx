import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { ReactComponent as HeaderLogo } from '../assets/icons/icon-layout.svg';
import { ReactComponent as HeaderGrid } from '../assets/icons/grid.svg';
import { ReactComponent as GridMobile } from '../assets/icons/grid-mobile.svg';

import './styles.css';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <GridMobile className="grid-icon-mobile" /> */}
                <Navbar.Brand href="#">
                    <HeaderLogo />
                    <HeaderGrid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            maxHeight: '100px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"> How it works</Nav.Link>
                        <Nav.Link href="#action2">Who we are</Nav.Link>
                        <Nav.Link href="#action3">What we do </Nav.Link>
                        <Nav.Link href="#action4">Contact us </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className='header-btn'>Sign In</button>
            </Container>
        </Navbar>
    );
}

export default Header;