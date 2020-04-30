import React from 'react'
import { LinkedIn } from './img/linkedin.svg'

const Footer = () => {
        return(
        <footer>
            <div>
                <h3>Simon Vanleeuw</h3>
                <p>Raafstraat 08, 2018 Antwerpen</p>
                <p>Belgium</p>
            </div>
            <div>
                <h3>Contact</h3>
                <a className='link' href="tel:0474783041"><p>+32 474 783 041</p></a>
                <a className='link' href="mailto:simon-vanleeuw@hotmail.com"><p>simon-vanleeuw@hotmail.com</p></a>
                <a className="icon-button" href="https://www.linkedin.com/in/simon-vanleeuw-08033245/" target="_blank">
                    <img src={LinkedIn} />
                </a>
            </div>
            <span><p>© 2020 — Simon Vanleeuw</p></span>
        </footer>
    )
        };

export default Footer;