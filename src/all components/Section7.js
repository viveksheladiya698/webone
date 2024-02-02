import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import {  FaThumbsUp } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

function Section7() {

    let art = {
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
        <div className='section7 pad1'>
            <Container>
                <Row className='mb-3'>
                    <Col sm>
                        <div className='cirti'>
                            <div className='cir-head d-flex'>
                                <div className='cirti-main'>
                                    <div className='cir-ico m-auto'>
                                        <p className='white text-center'><FaThumbsUp></FaThumbsUp></p>
                                    </div>
                                    <div className='cir-title text-center mt-3'>
                                        <h2 className='font'>RESENT NEWS AND ARTICLES</h2>
                                        <p className='clr'>Be aware of developments in the digital world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className='artical-slider'>
                            <OwlCarousel className='Owl-theme' loop {...art} margin={20}>
                                <div className='item cd1 text-center p-4'>
                                    <div className='new-box'>
                                        <div className='new-par'>
                                            <div className='img-box'>
                                                <img src={require(`../images/25.png`)}></img>
                                            </div>
                                            <div className='new-info pb-1'>
                                                <span>02.02.2023 - IT</span>
                                                <h6 className='pb-3'>What is Seo and sem?</h6>
                                                <p>What is Seo and Sem? SEO and SEM are two sides of the same coin, but they consist of ...</p>
                                            </div>
                                            <div className='new-btn'>
                                                <a href=''>More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item cd1 text-center p-4'>
                                    <div className='new-box'>
                                        <div className='new-par'>
                                            <div className='img-box'>
                                                <img src={require(`../images/26.png`)}></img>
                                            </div>
                                            <div className='new-info pb-1'>
                                                <span>02.02.2023 - IT</span>
                                                <h6 className='pb-3'>What is GTmetrix?</h6>
                                                <p>What is GTmetrix? GTmetrix shows the optimization performance of your web pages. It ...</p>
                                            </div>
                                            <div className='new-btn'>
                                                <a href=''>More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item cd1 text-center p-4'>
                                    <div className='new-box'>
                                        <div className='new-par'>
                                            <div className='img-box'>
                                                <img src={require(`../images/27.png`)}></img>
                                            </div>
                                            <div className='new-info pb-1'>
                                                <span>02.02.2023 - IT</span>
                                                <h6 className='pb-3'>Expand Your Network</h6>
                                                <p>Link building plays an important role in determining a page's ranking in search results ...</p>
                                            </div>
                                            <div className='new-btn'>
                                                <a href=''>More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item cd1 text-center p-4'>
                                    <div className='new-box'>
                                        <div className='new-par'>
                                            <div className='img-box'>
                                                <img src={require(`../images/28.png`)}></img>
                                            </div>
                                            <div className='new-info mb-1'>
                                                <span>02.02.2023 - IT</span>
                                                <h6 className='pb-3'>What is TrustRank?</h6>
                                                <p>TrustRank is a special seo link technique for determining safe sites and increasing the ...</p>
                                            </div>
                                            <div className='new-btn'>
                                                <a href=''>More</a>
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
export default Section7;