import React from "react";
import Email from '../assets/images/email.png';
import { ReactComponent as FaceBook } from '../assets/icons/face-book.svg';
import { ReactComponent as Linkedin } from '../assets/icons/icon-linkedin.svg';
import { ReactComponent as Slack } from '../assets/icons/icon-slack.svg';
import { ReactComponent as Twitter } from '../assets/icons/icon-twitter.svg';
import {
    Box,
    Container,
    Row,
    Col,
    FooterLink,
    Heading,
    Icon
} from "./FooterStyles";

const Footer = () => {
    return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Heading>Follow us</Heading>
                        <Icon>
                            <FaceBook />
                            <Linkedin />
                            <Slack />
                            <Twitter />
                        </Icon>
                        <Heading>information</Heading>
                        <FooterLink href="#">About Fapster app </FooterLink>
                        <FooterLink href="#">Get in Touch</FooterLink>
                        <FooterLink href="#"> Things We Like</FooterLink>
                    </Col>
                    <Col md={6}>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Col>
                    <Col md={6}>
                        <FooterLink href="#">Uttar Pradesh</FooterLink>
                        <FooterLink href="#">Ahemdabad</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Col>
                    <Col md={6}>
                        <Heading>Follow us</Heading>
                        <img src={Email} />

                    </Col>
                </Row>
            </Container>
    );
};
export default Footer;