import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CombineImg from '../assets/images/Combine.png';
import Torepresent from '../assets/images/Torepresent.png';
import Rectangle from '../assets/images/rectangle.png';
import Dots from '../assets/images/dots.png';
import Bg from '../assets/images/BG.png';
import WaveMobile from '../assets/images-mobile/wave-mobile.png';
import DotsMobile from '../assets/images-mobile/dots-mobile.png';
import RectangleMobile from '../assets/images-mobile/rectangle-mobile.png';
import CombineMobile from '../assets/images-mobile/Combine-mobile.png';
import CoolImageMobile from '../assets/images-mobile/Cool-images-mobile.png';
import BgMobile from '../assets/images-mobile/BG-mobile.png';
import TorepresentMobile from '../assets/images-mobile/Torepresent-mobile.png';

import { ReactComponent as IconBtnMobile } from '../assets/icons/icon-btn-mobile.svg';

import './styles.css';

const Main = () => {

    return (
        <Fragment>
            <div className='backgWrappMobile'>
                <img className='backgroundMobile' src={WaveMobile} />
                <img className='rectangleMobile' src={RectangleMobile} />
                <img className='dotsMobile' src={DotsMobile} />
            </div>
            <Container>
                <Row className="main">
                    <Col xs={6} md={12} lg={12} className="col">
                        {/* <div className="backgroundImage" style={{ backgroundImage: `url(${Rectangle})` }}></div> */}
                        {/* <img className='donsImg' src={Dots} /> */}
                        <img className='combineImg' src={CombineImg} />
                        <img className='bg' src={Bg} />
                        <img className='combineMobile' src={CombineMobile} />
                        <div>
                            <img className='coolMobile' src={CoolImageMobile} />
                            <img className='bgMobile' src={BgMobile} />
                        </div>
                        <img className='torepresentMobile' src={TorepresentMobile} />
                        <div className='btnMobile'>
                            <IconBtnMobile className="icon-btn-mobile" />
                        </div>
                    </Col>
                    <Col xs={6} md={10} lg={12}  className="col">
                        <img className='torepresent' src={Torepresent} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Main;