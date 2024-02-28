import './navbar.css';

export default function Navbar() {
    return (
         <nav className="nav">
        <ul>
            <li>
            <a href="/" className='nav-link'>Home</a>
            </li>
            <li>
                <a href="/about" className='nav-link'>About</a>
            </li>
            <li>
            <a href="/contact" className='nav-link'>Contact</a>
            </li>
        </ul>
    </nav>

    );
}