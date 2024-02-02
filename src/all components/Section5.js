import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaMedal} from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

function Section5() {
    return (
        <div className='section5 pad2 bg-clr'>
            <Container>
                <Row className='mb-3'>
                    <Col sm>
                        <div className='customer white'>
                            <div className='cus-head text-center'>
                                <div className='cus-ico'>
                                    <p><FaMedal></FaMedal></p>
                                </div>
                                <div className='cus-title'>
                                    <h2 className='font'>Our Customers Who Make Us</h2>
                                    <p>We work day and night for our customers and speed up their business processes.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/15.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/16.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/17.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/18.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/19.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/30.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/31.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/32.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/33.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-3' lg={2} md={6}>
                        <div className='comp-img'>
                            <div className='cimg'>
                                <img src={require(`../images/34.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section5;