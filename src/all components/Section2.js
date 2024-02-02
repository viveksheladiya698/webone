import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


import { FaLongArrowAltRight } from "react-icons/fa";
import { GrStorage} from "react-icons/gr";
import { MdStorage, MdSecurity } from "react-icons/md";
import { BsClipboard2Data, BsFillHddStackFill} from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { Col, Container, Row } from 'react-bootstrap';

function Section2() {
    return (
        <div className='section2 sec2 white'>
            <Container>
                <Row className='mb-3'>
                    <Col lg>
                        <div className='s2-head text-center'>
                            <div className='s2-heading'>
                                <h2 className='font'>Our Services and Solutions</h2>
                            </div>
                            <div className='s2-disp mb-1'>
                                <p>Your IT Infrastructure is Entrusted to Us.</p>
                            </div>
                            <div className='s2-btn'>
                                <a href=''>All Services <FaLongArrowAltRight></FaLongArrowAltRight></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><GrStorage></GrStorage></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>Server and Storage System</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><MdStorage></MdStorage></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>IT Support Services</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        Our customers have the right to unlimited calls and on-site support within the scope of the agreement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><BsClipboard2Data></BsClipboard2Data></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>Desktop and Server Virtualization</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><MdSecurity></MdSecurity></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>Network and Security Solution</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        A copy of our customers' Business Critical Systems is the provision of service in IT Cloud Cloud technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><GiProcessor></GiProcessor></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>Cloud Services</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div className='service m-4 text-center'>
                            <div className='ser-info'>
                                <div className='se-icon mb-2'>
                                    <span><BsFillHddStackFill></BsFillHddStackFill></span>
                                </div>
                                <div className='se-title mt-3'>
                                    <h4>Tracing Solution</h4>
                                </div>
                                <div className='se-disp'>
                                    <p>
                                        To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section2;