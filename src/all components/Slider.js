import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { FaLongArrowAltRight, FaServicestack} from "react-icons/fa";
import { MdStorage, MdOutlineCloudDone } from "react-icons/md";
import { BsFillHddStackFill, BsDatabaseFillAdd, BsHddNetworkFill} from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

function Slider() {

    let main = {
        items: 1,
        dots: false,
        nav: true
    }

    return (
        <div className='slider w-100 overflow-hidden'>
            <Row>
                <Col className='p-0' sm>
                    <OwlCarousel className='Owl-theme' loop {...main}>
                        <div className='item'>
                            <div className='slide-box'>
                                <div className='slider-imgbox'>
                                    <div className='image'>
                                        <img src={require(`../images/1.png`)} className='w-100'></img>
                                        <div className='slider-info white text-center'>
                                            <div className='info-par'>
                                                <div className='slider-heading'>
                                                    <h2>We Add Value</h2>
                                                    <h2>To Your Business</h2>
                                                </div>
                                                <div className='slider-txt mb-md-5'>
                                                    <p>We meet all the IT infrastructure needs of your business.</p>
                                                </div>
                                                <div className='slider-btn'>
                                                    <a href=''>Learn More <FaLongArrowAltRight></FaLongArrowAltRight></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='slide-box'>
                                <div className='slider-imgbox'>
                                    <div className='image'>
                                        <img src={require(`../images/2.png`)} className='w-100'></img>
                                        <div className='slider-info white text-center'>
                                            <div className='info-par'>
                                                <div className='slider-heading'>
                                                    <h2>For Your Business</h2>
                                                    <h2>Custom IT Solution</h2>
                                                </div>
                                                <div className='slider-txt mb-md-5'>
                                                    <p>We meet all the IT infrastructure needs of your business.</p>
                                                </div>
                                                <div className='slider-btn'>
                                                    <a href=''>Learn More <FaLongArrowAltRight></FaLongArrowAltRight></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </Col>
            </Row>
            <div className='corpo'>
                <Container>
                    <Row className='text-center py-4 col'>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><BsDatabaseFillAdd></BsDatabaseFillAdd></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>Server And Storage</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><MdStorage></MdStorage></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>IT Support Services</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><BsHddNetworkFill></BsHddNetworkFill></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>Desktop and Server</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><BsFillHddStackFill></BsFillHddStackFill></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>Network &Security</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><MdOutlineCloudDone></MdOutlineCloudDone></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>Cloud Services</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} xl={2} lg={3} md={4} className='mb-3'>
                            <div className='corp-box'>
                                <div className='corp-ico'>
                                    <p><FaServicestack></FaServicestack></p>
                                </div>
                                <div className='corp-txt'>
                                    <p>Tracing Solution</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='cor-detail'>
                        <div className='cr-par white'>
                            <Row className='pt-5'>
                                <Col sm={12} lg={6}>
                                    <div className='cr-ttl'>
                                        <h2>We provide Best IT Solutions for Corporate and Personal persons.</h2>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6} className='d-flex clr'>
                                    <div className='cr-bt'>
                                        <a href=''>View All Services <FaLongArrowAltRight></FaLongArrowAltRight></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Slider;