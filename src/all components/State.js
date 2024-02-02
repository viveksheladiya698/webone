import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FaHandsHelping, FaRegThumbsUp } from "react-icons/fa";
import { GrGroup, GrDocumentText } from "react-icons/gr";
import { Col, Container, Row } from 'react-bootstrap';

function State() {
    return (

        <div className='state'>
            <div className='status'>
                <Container>
                    <Row>
                        <Col sm={6} lg={3}>
                            <div className='stu-box'>
                                <div className='st-info text-center'>
                                    <div className='st-ico mb-4'>
                                        <FaHandsHelping></FaHandsHelping>
                                    </div>
                                    <h3>24</h3>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className='stu-box'>
                                <div className='st-info text-center'>
                                    <div className='st-ico mb-4'>
                                        <GrGroup></GrGroup>
                                    </div>
                                    <h3>690</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className='stu-box'>
                                <div className='st-info text-center'>
                                    <div className='st-ico mb-4'>
                                        <GrDocumentText></GrDocumentText>
                                    </div>
                                    <h3>720</h3>
                                    <p>Finished Projects</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className='stu-box'>
                                <div className='st-info text-center'>
                                    <div className='st-ico mb-4'>
                                        <FaRegThumbsUp></FaRegThumbsUp>
                                    </div>
                                    <h3>28</h3>
                                    <p>Our Awards</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default State;