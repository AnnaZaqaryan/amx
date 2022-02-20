import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Affordable from '../assets/images/affordable.png';
import Billyearly from '../assets/images/Billyearly.png';
import { ReactComponent as Dp } from '../assets/icons/dp.svg';
import { ReactComponent as Likepussy } from '../assets/icons/likepussy.svg';
import { ReactComponent as Forever } from '../assets/icons/forever.svg';
import { ReactComponent as IconAcrylic } from '../assets/icons/icon-acrylic.svg';
import './styles.css';

const cardItems = [
    {
        iconLik: <Likepussy />,
        iconFor: <Forever className='icon-free' />,
        iconAcr: <IconAcrylic />,
        descriptionCompo: 'Components-driven system',
        descriptionSales: 'Sales-boosting landing pages',
        descriptionAwesome: 'Awesome Feather icons pack',
        btn: 'Try for free'
    },
    {
        iconLik: <Likepussy />,
        iconFor: <Forever className='icon-free' />,
        iconAcr: <IconAcrylic />,
        descriptionCompo: 'Components-driven system',
        descriptionSales: 'Sales-boosting landing pages',
        descriptionAwesome: 'Awesome Feather icons pack',
        btn: 'Try for free'
    },
    {
        iconLik: <Likepussy />,
        iconFor: <Forever className='icon-free' />,
        iconAcr: <IconAcrylic />,
        descriptionCompo: 'Components-driven system',
        descriptionSales: 'Sales-boosting landing pages',
        descriptionAwesome: 'Awesome Feather icons pack',
        btn: 'Try for free'
    },
]

const AffordablePricing = () => {

    return (
        <div className="affordable-pricing">
            <Container>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <img src={Affordable} />
                    </Col>
                    <Col md={12} className="d-flex justify-content-center">
                        <div className='title'>
                            <img className="imageBill" src={Billyearly} />
                            <Dp className="iconDp" />
                        </div>
                    </Col>
                </Row>
                <Row className="cards">
                    {cardItems.map((item, index) => (
                        <Col key={index} sm={6} md={4} className="d-flex justify-content-center">
                            <Card className="card">
                                <div>
                                    {item.iconLik}
                                    {/* <Likepussy /> */}
                                </div>
                                {item.iconFor}
                                <div className="wrapp">
                                    {item.iconAcr}
                                    <p>{item.descriptionCompo}</p>
                                </div>
                                <div className="wrapp">
                                    <IconAcrylic />
                                    <p>{item.descriptionSales}</p>
                                </div>
                                <div className="wrapp">
                                    <IconAcrylic />
                                    <p>{item.descriptionAwesome}</p>
                                </div>
                                <button className="button">{item.btn}</button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default AffordablePricing;