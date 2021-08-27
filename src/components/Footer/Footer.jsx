import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
            <span ><i className="footerIcon fa fa-phone"></i> Toll free <b>1800 200 1234</b></span>
            <span><i class="footerIcon fab fa-facebook-square"></i> www.facebook.com/crtpumps</span>
            <span><i className="footerIcon fab fa-firefox"></i> www.crigroup.com</span>
            </div>
        </div>
    );
};

export default Footer;