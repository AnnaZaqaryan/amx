import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Email from '../assets/images/email.png';
import { ReactComponent as FaceBook } from '../assets/icons/face-book.svg';
import { ReactComponent as Linkedin } from '../assets/icons/icon-linkedin.svg';
import { ReactComponent as Slack } from '../assets/icons/icon-slack.svg';
import { ReactComponent as Twitter } from '../assets/icons/icon-twitter.svg';

import { ReactComponent as FaceBookMobile } from '../assets/icons/faceBook-mobile.svg';
// import { ReactComponent as SlackMobile } from '../assets/slack-mobile.svg';
import { ReactComponent as TwitterMobile } from '../assets/icons/Tw-mobile.svg';
import { ReactComponent as YoutubeMobile } from '../assets/icons/youtube-mobile.svg';

import Wave from '../assets/images/wave.png';
import footerMobile from '../assets/images-mobile/footer-mobile.png';
import footerBgMobile from '../assets/images-mobile/foote-ba-mobile.png';
import footerMobileDots from '../assets/images-mobile/footer-mobile-dots.png';


import './styles.css';
import AxInput from '../shared/AxInput/index';

const Footer = () => {

    return (
        <Fragment>
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
                            <AxInput />
                        </Col>
                    </Row>
                </Container>
                <img className="footer-image" src={Wave} />
            </div>
            
            <div className="icons-mobile">
                {/* <a href='#'><SlackMobile /> </a> */}
                {/* <a href='#'><LinkedinMobile /> </a> */}
                <a href='#'><YoutubeMobile /> </a>
                <a href='#'> <FaceBookMobile /> </a>
                <a href='#'> <TwitterMobile /> </a>
            </div>
            <div className="footerMobile">
                <img className="" src={footerMobile} />
                <img className="footerBgMobile" src={footerBgMobile} />
                <img className="footerMobileDots" src={footerMobileDots} />
            </div>
        </Fragment>
    )
}

export default Footer;