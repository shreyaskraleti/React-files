import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../assets/AIT-white-logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="AchieversIT Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                   <li><Link to="/pages">Pages</Link></li>
                   <li><Link to="/blogs">Blogs</Link></li>
                   <li><Link to="/support">Support</Link></li>

                </ul>
            </nav>
            <div className="header-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faSearch} />
                <button className="subscribe-button">Subscribe</button>
                </div>
                </header>
    )
}

export default Header;