import React from "react";

import './Footer.css';

import {useLocation} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const location = useLocation();
    if(location.pathname === '/login' || location.pathname === '/register') return null

    return(
        <footer className="text-center mt-5">
            <div className="icons">
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="/"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="/"><i className="fa-brands fa-square-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <p>Copyright ©2020 All rights reserved</p>
        </footer>
    );
};

export default Footer;