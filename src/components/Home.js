import '../App.css';
import '../Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from '../all components/Header';
import Slider from '../all components/Slider';
import Section1 from '../all components/Section1';
import Section2 from '../all components/Section2';
import Section3 from '../all components/Section3';
import State from '../all components/State';
import Section4 from '../all components/Section4';
import Section5 from '../all components/Section5';
import Section6 from '../all components/Section6';
import Section7 from '../all components/Section7';
import Footer from '../all components/Footer';

function Home() {
    return (
        <div className='main-body'>
            <Header/>
            <Slider></Slider>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <State></State>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
            <Section7></Section7>
            <Footer></Footer>
        </div>
    )
}
export default Home;