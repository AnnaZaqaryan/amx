import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image_1 from '../assets/images/image1.png';
import Image_2 from '../assets/images/image2.png';
import Image_3 from '../assets/images/image3.png';
import Image_4 from '../assets/images/image4.png';
import Image_5 from '../assets/images/image5.png';
import Image_6 from '../assets/images/image6.png';
import Image_7 from '../assets/images/image7.png';
import ImageMobile_3 from '../assets/images-mobile/image3-mobile.png';
import ImageMobile_2 from '../assets/images-mobile/image2-mobile.png';
import ImageMobile_4 from '../assets/images-mobile/image4-mobile.png';
import ImageMobile_7 from '../assets/images-mobile/image7-mobile.png';
import ImageMobile_5 from '../assets/images-mobile/image5-mobile.png';
import ImageMobile_6 from '../assets/images-mobile/image6-mobile.png';
import ImageMobile_8 from '../assets/images-mobile/image8-mobile.png';

import './styles.css';

const GridItem = () => {
    return (
        <div className='grid'>
            <div className='grid-mobile'>
                <img className='image-mobile' src={ImageMobile_3} />
                <img className='image-mobile2' src={ImageMobile_2} />
                <img className='image-mobile4' src={ImageMobile_4} />
            </div>
            <div className='grid-mobile'>
                <img className='image-mobile4' src={ImageMobile_7} />
                <img className='image-mobile5' src={ImageMobile_5} />
                <img className='image-mobile6' src={ImageMobile_6} />
            </div>
            <div className='image-mobile-wrapper'>
                <img className='image-mobile9' src={ImageMobile_8} />
            </div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={9} sm={6} md={3}>
                        <p className='title-use'>Use mixed grid with imagery, replace with your own photos and descriptions</p>
                        <img className='image' src={Image_1} />

                        <button className="btn">Learn more</button>
                    </Col>
                    <Col md={8}>
                        <div className='containerImages-top'>
                            <img className='image_2' src={Image_2} />
                            <div>
                                <p className='title-this'>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
                                <img className='image_3' src={Image_3} />
                                <img className='image_4' src={Image_4} />
                            </div>
                        </div>
                        <div className='containerImages-bottom'>
                            <div>
                                <img className='image_5' src={Image_5} />
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

export default GridItem;
