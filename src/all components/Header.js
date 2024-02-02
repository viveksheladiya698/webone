import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import img from '../images/logo.png';

function Header() {


    const [open, setOpen] = useState(false);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col sm>
                        <div className='head'>
                            <div className='head-box flex'>
                                <div className='left-head'>
                                    <div className='head-img'>
                                        <img src={img}></img>
                                    </div>
                                </div>
                                <div className='head-manu d-none d-lg-flex'>
                                    <div className='manu'>
                                        <ul className='main-manu'>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/service">It Services</Link></li>
                                            <li><Link to="/package">Package</Link></li>
                                            <li><Link to="/client">Client</Link></li>
                                            <li><Link to="/">Blog</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='right-head d-flex'>
                                    <div className='offcan'>
                                        <Button variant="primary" onClick={handleShow}>
                                            <div className='head-icon me-2'>
                                                <div className='ic-main'>
                                                    <div className='tp'></div>
                                                    <div className='mid tp'></div>
                                                    <div className='tp'></div>
                                                </div>
                                            </div>
                                        </Button>

                                        <Offcanvas show={show} onHide={handleClose}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title><img src={img} className='w-100'></img></Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <div className='manu'>
                                                    <ul className='main-manu d-block'>
                                                        <li><Link to="/">Home</Link></li>
                                                        <li><Link to="/about">About</Link></li>
                                                        <li><Link to="/service">It Services</Link></li>
                                                        <li><Link to="/package">Package</Link></li>
                                                        <li><Link to="/client">Client</Link></li>
                                                        <li><Link to="/">Blog</Link></li>
                                                        <li><Link to="/">Contact</Link></li>
                                                    </ul>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>
                                    <div className='head-contact d-sm-block d-lg-none d-none d-xl-block'>
                                        <div className='num d-flex'>
                                            <a href=''><span><MdOutlinePhoneInTalk></MdOutlinePhoneInTalk></span> +1 (234) 567 89 10</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;