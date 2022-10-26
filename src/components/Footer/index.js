import React from "react";

import "../../styles/typography.css"
import "./styles.css";

import Github from "../../assets/icons/Github.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Email from "../../assets/icons/Email.svg";

const Footer = () => {
    return (
        <footer className="container">
            <a href='https://github.com/rodrigo-orlandini' className='item' target="_blank">
                <img src={Github} alt="Github" className='image' />
                <p className='regular'>rodrigo-orlandini</p>
            </a>

            <a href="https://www.linkedin.com/in/rodrigo-orlandini-a72b081b3/" className='item' target="_blank">
                <img src={LinkedIn} alt="LinkedIn" className='image' />
                <p className='regular'>/rodrigo-orlandini-a72b081b3</p>
            </a>

            <div className='item'>
                <img src={Email} alt="Email" className='image' />
                <p>rodrigosorlandini@hotmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;