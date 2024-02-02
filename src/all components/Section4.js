import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FaMedal, FaCloudDownloadAlt } from "react-icons/fa";
import { BsFillHddStackFill, BsDatabaseFillGear } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

function Section4() {
    return (
        <div className='section4'>
            <Container>
                <Row>
                    <Col sm>
                        <div className='pack d-flex mb-4'>
                            <div className='pc-head'>
                                <div className="pack-ico white text-center mb-3 m-auto">
                                    <FaMedal></FaMedal>
                                </div>
                                <div className='pc-title text-center'>
                                    <h3 className='font'>Special Packs</h3>
                                </div>
                                <div className='pc-disp'>
                                    <p className='clr'>Select pricing plan to get more</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={4} className='mb-4'>
                        <div className='offer'>
                            <div className='off-box'>
                                <div className='off-img mb-4'>
                                    <img src={require(`../images/11.jpg`)} className='w-100'></img>
                                    <div className='off-cap white text-center p-2 w-100'>
                                        <div className='cap-ico'>
                                            <p><BsDatabaseFillGear></BsDatabaseFillGear></p>
                                        </div>
                                        <div className='cap-info'>
                                            <h3 className='mt-3'>IT Support</h3>
                                            <p className='mt-3'>These are the management services we provide the IT support and maintenance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='off-list p-4 d-flex'>
                                    <ul className='lista'>
                                        <li className='py-2'>✓ Phone Support Service</li>
                                        <li className='py-2'>✓ Remote Connection Service</li>
                                        <li className='py-2'>✓ Onsite Support Service</li>
                                        <li className='py-2'>✗ Consultancy Service</li>
                                        <li className='py-2'>✗ Network Security Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={4} className='mb-4'>
                        <div className='offer'>
                            <div className='off-box'>
                                <div className='off-img mb-4'>
                                    <img src={require(`../images/12.jpg`)} className='w-100'></img>
                                    <div className='off-cap white text-center p-2 w-100'>
                                        <div className='cap-ico'>
                                            <p><FaCloudDownloadAlt></FaCloudDownloadAlt></p>
                                        </div>
                                        <div className='cap-info'>
                                            <h3 className='mt-3'>Cloud Service</h3>
                                            <p className='mt-3'>It is the process of configuring virtual cloud systems that businesses need.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='off-list p-4 d-flex'>
                                    <ul className='lista'>
                                        <li className='py-2'>✓ Phone Support Service</li>
                                        <li className='py-2'>✓ Remote Connection Service</li>
                                        <li className='py-2'>✓ Onsite Support Service</li>
                                        <li className='py-2'>✓ Consultancy Service</li>
                                        <li className='py-2'>✗ Network Security Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={4} className='mb-4'>
                        <div className='offer'>
                            <div className='off-box'>
                                <div className='off-img mb-4'>
                                    <img src={require(`../images/13.jpg`)} className='w-100'></img>
                                    <div className='off-cap white text-center p-2 w-100'>
                                        <div className='cap-ico'>
                                            <p><BsFillHddStackFill></BsFillHddStackFill></p>
                                        </div>
                                        <div className='cap-info'>
                                            <h3 className='mt-3'>Server Virtualization</h3>
                                            <p className='mt-3'>It is the process of configuring virtual servers that businesses need.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='off-list p-4 d-flex'>
                                    <ul className='lista'>
                                        <li className='py-2'>✓ Phone Support Service</li>
                                        <li className='py-2'>✓ Remote Connection Service</li>
                                        <li className='py-2'>✓ Onsite Support Service</li>
                                        <li className='py-2'>✓ Consultancy Service</li>
                                        <li className='py-2'>✓ Network Security Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section4;