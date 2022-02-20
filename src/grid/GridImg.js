import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image_1 from '../assets/images/image1.png';
import Image_2 from '../assets/images/image2.png';
import Image_3 from '../assets/images/image3.png';
import Image_4 from '../assets/images/image4.png';
import Image_5 from '../assets/images/image5.png';
import Image_6 from '../assets/images/image6.png';
import Image_7 from '../assets/images/image7.png';
import ImageMobile_2 from '../assets/images/image2-mobile.png';
import ImageMobile_3 from '../assets/images/image3-mobile.png';
import ImageMobile_4 from '../assets/images/image4-mobile.png';
import ImageMobile_5 from '../assets/images/image5-mobile.png';
import ImageMobile_7 from '../assets/images/image7-mobile.png';
import ImageMobile_6 from '../assets/images/image6-mobile.png';
import ImageMobile_8 from '../assets/images/image8-mobile.png';

import './styles.css';

const GridImg = () => {
    return (
        <div className='grid'>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={3}>
                        <p className='title-use'>Use mixed grid with imagery, replace with your own photos and descriptions</p>
                        <img className='image' src={Image_1} />
                        <img className='image-mobile' src={ImageMobile_3} />
                        <img className='image-mobile' src={ImageMobile_2} />
                        <img className='image-mobile' src={ImageMobile_4} />
                        <button className="btn">Learn more</button>
                    </Col>
                    <Col md={8}>
                        <div className='containerImages-top'>
                            <img className='image_2' src={Image_2} />
                            <img className='image-mobile' src={ImageMobile_7} />
                            <img className='image-mobile' src={ImageMobile_5} />
                            <img className='image-mobile' src={ImageMobile_6} />
                            <div>
                                <p className='title-this'>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
                                <img className='image_3' src={Image_3} />
                                <img className='image_4' src={Image_4} />
                               
                            </div>
                        </div>
                        <div className='containerImages-bottom'>
                            <div>
                                <img className='image_5' src={Image_5} />
                                <img className='image-mobile' src={ImageMobile_8} />
                            </div>
                            <div>
                                <img className='image_6' src={Image_6} />
                            </div>
                            <div>
                                <img className='image_7' src={Image_7} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GridImg;
