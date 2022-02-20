import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Email from '../assets/images/email.png';
import { ReactComponent as FaceBook } from '../assets/icons/face-book.svg';
import { ReactComponent as Linkedin } from '../assets/icons/icon-linkedin.svg';
import { ReactComponent as Slack } from '../assets/icons/icon-slack.svg';
import { ReactComponent as Twitter } from '../assets/icons/icon-twitter.svg';
import { ReactComponent as User } from '../assets/icons/icon-user.svg';
import './styles.css';


const Footer = () => {

    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md={6} className="d-flex justify-content-start">
                        <div className="icons">
                            <p className="follow">Follow us</p>
                            <a href='#'><FaceBook /> </a>
                            <a href='#'><Linkedin /> </a>
                            <a href='#'><Slack /> </a>
                            <a href='#'> <Twitter /> </a>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <div>
                            <p>Follow us</p>
                            <img src={Email} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>

                        <p>information</p>
                        <a href="#">About Fapster app </a>
                        <a href="#">Get in Touch</a>
                        <a href="#"> Things We Like</a>
                    </Col>
                    <Col sm={4} md={3}>
                        <a href="#">Onhovered / Active</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service </a>

                    </Col>
                    <Col sm={4} md={3}>
                        <a href="#">Writing</a>
                        <a href="#">Internships</a>
                        <a href="#">Coding</a>
                        <a href="#">Teaching</a>
                    </Col>
                    <Col sm={4} md={3} >

                        <p>keep in touch</p>

                        <input className="input" type="text" placeholder='Your name' />
                        <User className='icon-user' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;