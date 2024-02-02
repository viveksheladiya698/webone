import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { FaThumbsUp } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';


function Section6() {

    let cust = {
        items: 4,
        responsive: {
            1200: {
                items: 4
            },
            900: {
                items: 3
            },
            576:
            {
                items: 2
            },
            0: {
                items: 1
            }
        }
    }

    return (
        <div className='section6 pad1'>
            <Container>
                <Row className='mb-2'>
                    <Col sm>
                        <div className='review'>
                            <div className='rev-head text-center'>
                                <div className='rev-ico mb-3'>
                                    <p className='white text-center'><FaThumbsUp></FaThumbsUp></p>
                                </div>
                                <div className='rev-title'>
                                    <h2 className='font mb-3'>WHAT ARE OUR CUSTOMERS SAYING ?</h2>
                                    <p className='clr'>Every customer is valuable to us. Here are the reviews of some of our customers who chose us.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='review-slider'>
                            <OwlCarousel className='Owl-theme' loop margin={20} {...cust}>
                                <div className="item c1-box px-4 py-5">
                                    <div className='ctm-box text-center'>
                                        <div className='rev-box'>
                                            <p className='sclr'>We needed IT services for our company. They did a super job. A friendly and professional team. Thank you for everything. Good luck.</p>
                                        </div>
                                    </div>
                                    <div className='rev-img d-flex'>
                                        <div className="rev-bx">
                                            <div className='rimg'>
                                                <img src={require(`../images/20.png`)}></img>
                                            </div>
                                            <div className='r-info mt-5'>
                                                <p className='text-center'>Jane Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item c1-box px-4 py-5">
                                    <div className='ctm-box text-center'>
                                        <div className='rev-box'>
                                            <p className='sclr'>We needed IT services for our company. They did a super job. A friendly and professional team. Thank you for everything. Good luck.</p>
                                        </div>
                                    </div>
                                    <div className='rev-img d-flex'>
                                        <div className="rev-bx">
                                            <div className='rimg'>
                                                <img src={require(`../images/21.png`)}></img>
                                            </div>
                                            <div className='r-info mt-5'>
                                                <p className='text-center'>Jane Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item c1-box px-4 py-5">
                                    <div className='ctm-box text-center'>
                                        <div className='rev-box'>
                                            <p className='sclr'>We needed IT services for our company. They did a super job. A friendly and professional team. Thank you for everything. Good luck.</p>
                                        </div>
                                    </div>
                                    <div className='rev-img d-flex'>
                                        <div className="rev-bx">
                                            <div className='rimg'>
                                                <img src={require(`../images/23.png`)}></img>
                                            </div>
                                            <div className='r-info mt-5'>
                                                <p className='text-center'>Jane Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item c1-box px-4 py-5">
                                    <div className='ctm-box text-center'>
                                        <div className='rev-box'>
                                            <p className='sclr'>We needed IT services for our company. They did a super job. A friendly and professional team. Thank you for everything. Good luck.</p>
                                        </div>
                                    </div>
                                    <div className='rev-img d-flex'>
                                        <div className="rev-bx">
                                            <div className='rimg'>
                                                <img src={require(`../images/24.png`)}></img>
                                            </div>
                                            <div className='r-info mt-5'>
                                                <p className='text-center'>Jane Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item c1-box px-4 py-5">
                                    <div className='ctm-box text-center'>
                                        <div className='rev-box'>
                                            <p className='sclr'>We needed IT services for our company. They did a super job. A friendly and professional team. Thank you for everything. Good luck.</p>
                                        </div>
                                    </div>
                                    <div className='rev-img d-flex'>
                                        <div className="rev-bx">
                                            <div className='rimg'>
                                                <img src={require(`../images/22.png`)}></img>
                                            </div>
                                            <div className='r-info mt-5'>
                                                <p className='text-center'>Jane Doe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section6;