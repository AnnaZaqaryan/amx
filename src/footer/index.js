import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Email from '../assets/images/email.png';
import { ReactComponent as FaceBook } from '../assets/icons/face-book.svg';
import { ReactComponent as Linkedin } from '../assets/icons/icon-linkedin.svg';
import { ReactComponent as Slack } from '../assets/icons/icon-slack.svg';
import { ReactComponent as Twitter } from '../assets/icons/icon-twitter.svg';

import Wave from '../assets/images/wave.png';

import './styles.css';
import AxInput from '../shared/AxInput/index';

const Footer = () => {

    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={6} >
                        <p className="follow">Follow us</p>
                        <div className="icons">
                            <a href='#'><FaceBook /> </a>
                            <a href='#'><Linkedin /> </a>
                            <a href='#'><Slack /> </a>
                            <a href='#'> <Twitter /> </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <p className='follow'>Follow us</p>
                            <img src={Email} />
                            <p className="keep">keep in touch</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={2}>
                        <p className="information">information</p>
                        <a href="#">About Fapster app </a>
                        <a href="#">Get in Touch</a>
                        <a href="#"> Things We Like</a>
                    </Col>
                    <Col sm={4} md={2}>
                        <a href="#" className="active">Onhovered / Active</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service </a>

                    </Col>
                    <Col sm={4} md={2}>
                        <a href="#">We are hiring!</a>
                        <a href="#">Resources</a>
                    </Col>
                    <Col sm={4} md={5}>
                     <AxInput/>
                    </Col>
                </Row>
            </Container>
            <img className="footer-image" src={Wave} />
        </div>
    )
}

export default Footer;