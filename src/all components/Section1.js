import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FaLongArrowAltRight, FaPeopleArrows } from "react-icons/fa";
import { BsGlobe2, BsDatabaseDown } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

function Section1() {
    return (
        <section className='section1'>
            <Container>
                <Row className='d-flex ro'>
                    <Col sm lg={5} md={12}>
                        <div className='bg-img'>
                            <img src={require(`../images/6.png`)} className='w-100'></img>
                            <div className='photo'>
                                <img src={require(`../images/3.png`)} className='w-100'></img>
                            </div>
                        </div>
                    </Col>
                    <Col sm lg={4} md={12} className='m-auto m d-flex'>
                        <div className='pro-par'>
                            <div className='main-pro'>
                                <div className='pro-tit'>
                                    <h2>professional IT Service</h2>
                                    <p className='clr'>With our reliable service understanding and professional staff, we aim to present the expectations and requirements to the enterprises in the fastest way with technical support service.</p>
                                </div>
                                <div className='back mb-4'>
                                    <img src={require(`../images/bg.jpg`)}></img>
                                </div>
                                <div className='system mb-4'>
                                    <div className='sys-par d-flex mb-2'>
                                        <div className='sio me-3'>
                                            <span><BsGlobe2></BsGlobe2></span>
                                        </div>
                                        <div className='sino'>
                                            <h6>Corporate Consulting</h6>
                                            <p className='clr'>We create technological infrastructures that will accelerate your business processes.</p>
                                        </div>
                                    </div>
                                    <div className='sys-par d-flex mb-2'>
                                        <div className='sio me-3'>
                                            <span><BsDatabaseDown></BsDatabaseDown></span>
                                        </div>
                                        <div className='sino'>
                                            <h6>IT Service System</h6>
                                            <p className='clr'>It covers the technical service we provide within the scope of IT support and maintenance.</p>
                                        </div>
                                    </div>
                                    <div className='sys-par d-flex mb-2'>
                                        <div className='sio me-3'>
                                            <span><FaPeopleArrows></FaPeopleArrows></span>
                                        </div>
                                        <div className='sino'>
                                            <h6>Innovation Solution</h6>
                                            <p className='clr'>We produce solutions by closely following the innovations in the field of informatics.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='get-btn'>
                                    <a href=''>Get to Know us <FaLongArrowAltRight></FaLongArrowAltRight></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Section1;