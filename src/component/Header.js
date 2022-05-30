import React from 'react';
import {Link} from "react-router-dom";

import logo from '../img/logo.png';

const Header = () => (
    <div className="Header">
        <Link to="/" className="Header-logo">
            <img src={logo} className="Header-root" alt="한남대학교"/>
        </Link>
        <div className="Header-nav">
            <a href="http://www.hannam.ac.kr/kor/main/" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="Header-link" alt="한남대학교"/>
            </a>
            <a href="https://my.hnu.kr/html/main/sso.html" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="Header-link" alt="하이포탈"/>
            </a>
            <a href="https://hiclass.hannam.ac.kr/learningx/main" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="Header-link" alt="하이클래스"/>
            </a>
            <Link to="/service_center">
                <img src={logo} className="Header-link" alt="고객센터"/>
            </Link>
        </div>
    </div>
)

export default Header;