// url :- https://demo.templatemonster.com/demo/243582.html?_gl=1*pn5wjr*_ga*NTE1Nzg5OTMzLjE2ODYwMjU4MzM.*_ga_FTPYEGT5LY*MTcwMzUwODYwMi44LjEuMTcwMzUwODY2Ni41OC4wLjA.

// links
import { Routes, Route } from "react-router-dom";


import './App.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./components/Home";
import About from './components/About';
import Itservice from "./components/Itservice";
import Packages from "./components/Packages";
import Client from "./components/Client";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Itservice />} />
                <Route path="/package" element={<Packages />} />
                <Route path="/client" element={<Client />} />
            </Routes>
        </>
    );
}

export default App;
