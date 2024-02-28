import './App.css';
import {Link, useNavigate, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'
import Footer from './Footer';
import Address from './Address';
import Services from './Services';
import Feedback from './Feedback';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Routes>
        <Route path="/address" element={<Address />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
