import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";



function Aboutslid() {
    return (
        <div className="aboutslider">
            <div className="w-100 about">
                <img src={require(`../images/aboutbg.jpg`)} className="w-100"></img>
                <div className="about-inf white text-center">
                    <h2 className='abt'>About</h2>
                    <div className="path">
                        <p><Link to="/">Home</Link> <FaChevronRight ></FaChevronRight> About Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Aboutslid;