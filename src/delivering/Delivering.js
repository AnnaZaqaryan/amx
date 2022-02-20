import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as Delive } from '../assets/icons/delive.svg';
import FeatureIconicPink from '../assets/images/featureIconicPink.png';
import FeatureIconicBlue from '../assets/images/featureIconicBlue.png';
import FeatureIconicPurple from '../assets/images/featureIconicPurple.png';
import FeatureIconicGreen from '../assets/images/featureIconicGreen.png';

import './styles.css';


const Delivering = () => {

    return (
        <div className='delivering'>
            <Container>
                <Row>
                    <Col md={10}>
                        <Delive className='iconDelive' />
                        <p className="subTitle">We’re the first multi-purpose design kit solutions for businesses. We help you bridge
                            gaps between your layouts, templates and developers to empower all involved.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3} className="d-flex justify-content-center">
                        <img src={FeatureIconicPink} />
                    </Col>
                    <Col sm={6} md={3} className="d-flex justify-content-center">
                        <img src={FeatureIconicBlue} />
                    </Col>
                    <Col sm={6} md={3} className="d-flex justify-content-center">
                        <img src={FeatureIconicPurple} />
                    </Col>
                    <Col sm={6} md={3} className="d-flex justify-content-center">
                        <img src={FeatureIconicGreen} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Delivering;