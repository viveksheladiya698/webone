import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { FaFacebookF, FaInstagramSquare, FaTwitter} from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';


function Section3() {

    let team = {
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }


    return (
        <div className='section3'>
            <div className='sec3-top'>
                <Container>
                    <Row className='py-5 text-center'>
                        <Col lg>
                            <div className='slid-head'>
                                <div className='si-title'>
                                    <h2 className='font'>Generating Ideas is Teamwork</h2>
                                </div>
                                <div className='si-disp'>
                                    <p className='clr'>We facilitate business processes by producing special ideas for each of our customers.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg>
                        <OwlCarousel className='owl-theme si1 mb-5' loop margin={20} {...team}>
                            <div class='item'>
                                <div className='ig1-box'>
                                    <div className='ig-1'>
                                        <img src={require(`../images/7.png`)}></img>
                                        <div className='team-info white d-flex text-center'>
                                            <div className='text-center'>
                                                <h4>Adam Brown</h4>
                                                <p>Founder</p>
                                                <span><FaFacebookF></FaFacebookF><FaInstagramSquare></FaInstagramSquare><FaTwitter></FaTwitter></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='ig1-box'>
                                    <div className='ig-1'>
                                        <img src={require(`../images/8.png`)}></img>
                                        <div className='team-info white d-flex text-center'>
                                            <div className='text-center'>
                                                <h4>Jack Smith</h4>
                                                <p>Ceo</p>
                                                <span><FaFacebookF></FaFacebookF><FaInstagramSquare></FaInstagramSquare><FaTwitter></FaTwitter></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='ig1-box'>
                                    <div className='ig-1'>
                                        <img src={require(`../images/9.png`)}></img>
                                        <div className='team-info white d-flex text-center'>
                                            <div className='text-center'>
                                                <h4>Robert Lee</h4>
                                                <p>Developer</p>
                                                <span><FaFacebookF></FaFacebookF><FaInstagramSquare></FaInstagramSquare><FaTwitter></FaTwitter></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='ig1-box'>
                                    <div className='ig-1'>
                                        <img src={require(`../images/10.png`)}></img>
                                        <div className='team-info white d-flex text-center'>
                                            <div className='text-center'>
                                                <h4>Michael Lee</h4>
                                                <p>Director</p>
                                                <span><FaFacebookF></FaFacebookF><FaInstagramSquare></FaInstagramSquare><FaTwitter></FaTwitter></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className='ig1-box'>
                                    <div className='ig-1'>
                                        <img src={require(`../images/29.png`)}></img>
                                        <div className='team-info white d-flex text-center'>
                                            <div className='text-center'>
                                                <h4>Olivia Lee</h4>
                                                <p>Web Designer</p>
                                                <span><FaFacebookF></FaFacebookF><FaInstagramSquare></FaInstagramSquare><FaTwitter></FaTwitter></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section3;