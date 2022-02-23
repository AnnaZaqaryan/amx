import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Affordable from '../assets/images/affordable.png';
import PricingMobile from '../assets/images/pricing-mobile.png';
import Billyearly from '../assets/images/Billyearly.png';
import BillyearlyMobile from '../assets/images-mobile/Billyearly-mobile.png';

import { ReactComponent as Dp } from '../assets/icons/dp.svg';
import { ReactComponent as Likepussy } from '../assets/icons/likepussy.svg';
import { ReactComponent as Forever } from '../assets/icons/forever.svg';
import { ReactComponent as IconAcrylic } from '../assets/icons/icon-acrylic.svg';
import { ReactComponent as IconMonth } from '../assets/icons/month.svg';
import { ReactComponent as IconEditor } from '../assets/icons/editor.svg';
import { ReactComponent as DpMobile } from '../assets/icons/dp-mobile.svg';
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
        iconFor: <IconMonth className='icon-free' />,
        iconAcr: <IconAcrylic />,
        descriptionCompo: 'Components-driven system',
        descriptionSales: 'Sales-boosting landing pages',
        descriptionAwesome: 'Awesome Feather icons pack',
        btn: 'Try for free'
    },
    {
        iconLik: <Likepussy />,
        iconFor: <IconEditor className='icon-free' />,
        iconAcr: <IconAcrylic />,
        descriptionCompo: 'Components-driven system',
        descriptionSales: 'Sales-boosting landing pages',
        descriptionAwesome: 'Awesome Feather icons pack',
        btn: 'Try for free'
    },
]

const CardItem = () => {

    return (
        <div className="affordable-pricing">
            <Container>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <img className='affordable' src={Affordable} />
                        <img className='pricing-mobile' src={PricingMobile} />
                    </Col>
                    <Col md={12} className="d-flex justify-content-center">
                        <div className='title'>
                            <img className="imageBill" src={Billyearly} />
                            <Dp className="iconDp" />
                            <img className="imageBillMobile" src={BillyearlyMobile} />
                            <DpMobile className='iconDpMobile'/>
                        </div>
                    </Col>
                </Row>
                <Row className="cards">
                    {cardItems.map((item, index) => (
                        <Col key={index} sm={6} md={4} className="d-flex justify-content-center">
                            <Card className="card">
                                <div>
                                    {item.iconLik}
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

export default CardItem;