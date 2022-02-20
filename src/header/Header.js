import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as HeaderLogo } from '../assets/icons/icon-layout.svg';
import { ReactComponent as HeaderGrid } from '../assets/icons/grid.svg';
import Menu from '../menu/Menu';

import './styles.css';

const Header = () => {

  return (
    <div className='header'> 
    <Container>
        <Row>
          <Col sm={3} md={2}>
            <HeaderLogo />
            <HeaderGrid />
          </Col>
          <Col  sm={6} md={8}>
            <Menu />
          </Col>
          <Col sm={3} md={2}>
            <button className='header-btn'>Sign In</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;