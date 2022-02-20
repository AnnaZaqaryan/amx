import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image_1 from '../assets/images/image1.png';
import Image_2 from '../assets/images/image2.png';
import Image_3 from '../assets/images/image3.png';
import Image_4 from '../assets/images/image4.png';
import Image_5 from '../assets/images/image5.png';
import Image_6 from '../assets/images/image6.png';
import Image_7 from '../assets/images/image7.png';

import './styles.css';

const GridImg = () => {
    return (
        <div className='grid'>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={3}>
                        <p className='title-use'>Use mixed grid with imagery, replace with your own photos and descriptions</p>
                        <img className='image' src={Image_1} />
                        <button className="btn">Learn more</button>
                    </Col>
                    <Col md={8}>
                        <div className='containerImages-top'>
                            <div>
                                <img src={Image_2} />
                            </div>
                            <div>
                                <p className='title-this'>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
                                <img className='image_3' src={Image_3} />
                                <img src={Image_4} />
                            </div>
                        </div>
                        <div className='containerImages-bottom'>
                            <div>
                                <img src={Image_5} />

                            </div>
                            <div>
                                <img className='image_6' src={Image_6} />

                            </div>
                            <div>
                                <img src={Image_7} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GridImg;
