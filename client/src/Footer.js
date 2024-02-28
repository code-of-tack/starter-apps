import {Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
         <footer className="footer">
            <nav className="foot">
        <ul>
            <li>
                <a href="/address" className='address-title'>Address</a>
            </li>
            <li>
                <a href="/services">Services</a>
            </li>
            <li>
                <a href="/feedback">Feedback</a>
            </li>
        </ul>
            </nav>
            <p>&copy;
                2024 My Website. All rights reserved.
            </p>
    </footer>
    );
}

export default Footer;
