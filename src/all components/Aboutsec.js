import { Col, Container,Row } from 'react-bootstrap';
import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaMedal,FaThumbsUp,FaHandshake   } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

function Aboutsec()
{
    return(
        <div className='abodta'>
            <Container>
                <Row>
                    <Col lg={3} sm={12} className='mb-3'>
                        <div className='a1 text-center'>
                            <div className='ic-box'>
                                <span className='white mb-3'><FaMedal></FaMedal></span>
                                <p>Reliability</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='mb-3'>
                        <div className='a1 text-center'>
                            <div className='ic-box'>
                                <span className='white mb-3'><GrCertificate></GrCertificate></span>
                                <p>Loyalty</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='mb-3'>
                        <div className='a1 text-center'>
                            <div className='ic-box'>
                                <span className='white mb-3'><FaThumbsUp ></FaThumbsUp ></span>
                                <p>Experience</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='mb-3'>
                        <div className='a1 text-center'>
                            <div className='ic-box'>
                                <span className='white mb-3'><FaHandshake ></FaHandshake ></span>
                                <p>Support</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Aboutsec;