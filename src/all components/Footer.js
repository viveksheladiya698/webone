import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FaLongArrowAltRight, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdPhoneInTalk } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='white'>
                    <Col sm className='ft mb-3' md={12} sm={12} lg>
                        <div className='fo-par'>
                            <div className='fp1'>
                                <div className='fimg'>
                                    <img src={require(`../images/flogo.png`)} className='w-100'></img>
                                </div>
                                <div className='fadd mb-3'>
                                    <p><span><GrMapLocation></GrMapLocation></span>New Jersey, America</p>
                                    <p><span><MdPhoneInTalk></MdPhoneInTalk></span>+123 456 789</p>
                                    <p><span><BsEnvelope></BsEnvelope></span>example@example.com</p>
                                </div>
                                <div className='fio'>
                                    <span><FaFacebookF></FaFacebookF></span>
                                    <span><FaInstagramSquare></FaInstagramSquare></span>
                                    <span><FaTwitter></FaTwitter></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm className='ft mb-3' md={12} sm={12} lg>
                        <div className='fo-par'>
                            <div className='fp2'>
                                <div className='fp-inf'>
                                    <h2 className='font'>Join Our Newsletter</h2>
                                    <p>Subscribe to be informed about our services and products.</p>
                                </div>
                                <div className='email'>
                                    <input type='text' placeholder='Your Email Address' className='w-100 inp mb-3'></input><br></br>
                                    <a href='' className='w-100'>Subscribe <FaLongArrowAltRight></FaLongArrowAltRight></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm className='ft mb-3' md={6} sm={12} lg>
                        <div className='fo-par'>
                            <div className='list-title mb-3'>
                                <h6 className='font'>IT Services</h6>
                            </div>
                            <div className='service-list'>
                                <ul className='list'>
                                    <li><a href=''>Server Storage Systems</a></li>
                                    <li><a href=''>IT Support Services</a></li>
                                    <li><a href=''>Server Virtualization</a></li>
                                    <li><a href=''>Network Solutions</a></li>
                                    <li><a href=''>Cloud Services</a></li>
                                    <li><a href=''>Tracing Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm className='ft mb-3' md={6} sm={12} lg>
                        <div className='fo-par'>
                            <div className='list-title mb-3'>
                                <h6 className='font'>Quick Linls</h6>
                            </div>
                            <div className='service-list'>
                                <ul className='list'>
                                    <li><a href=''>Home</a></li>
                                    <li><a href=''>About</a></li>
                                    <li><a href=''>Packages</a></li>
                                    <li><a href=''>Clients</a></li>
                                    <li><a href=''>Blog</a></li>
                                    <li><a href=''>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className='copyright mt-3'>
                            <p>© 2023 Webona - All Rights Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;