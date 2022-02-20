import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CombineImg from '../assets/images/Combine.png';
import CombineMobile from '../assets/images/Combine-mobile.png';
import CoolMobile from '../assets/images/Cool-images-mobile.png';
import Torepresent from '../assets/images/Torepresent.png';
import TorepresentMobile from '../assets/images/Torepresent-mobile.png';
import WaveMobile from '../assets/images/wave-mobile.png';
import Rectangle from '../assets/images/rectangle.png';
import Dots from '../assets/images/dots.png';
import Bg from '../assets/images/BG.png';

import './styles.css';

const Main = () => {

    return (
        <Container>
            <Row className="main">
                <Col xs={6} md={10} lg={12}>
                    <div className="backgroundImage" style={{ backgroundImage: `url(${Rectangle})` }}></div>
                    {/* <div className="wave-mobile" style={{ backgroundImage: `url(${WaveMobile})` }}></div> */}
                    <img className='donsImg' src={Dots} />
                    <img className='combineImg' src={CombineImg} />
                    <img className='combine-mobile' src={CombineMobile} />
                    <img className='cool-mobile' src={CoolMobile} />
                    <img className='torepresent-mobile' src={TorepresentMobile} />
                    <img className='bg' src={Bg} />
                </Col>
                <Col xs={6} md={10} lg={12}>
                    <img className='torepresent' src={Torepresent} />

                </Col>
            </Row>
        </Container>
    )
}

export default Main;