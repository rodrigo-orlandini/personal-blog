import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/typography.css"
import "./styles.css";

import English from "../../assets/icons/English.svg";
import Brazil from "../../assets/icons/Brazil.svg";

import LanguageSelector from "../LanguageSelector"

import { english, brazil } from '../../content/HeaderContent';

const Header = ({ changeLanguage }) => {

    const [selected, setSelected] = useState({
        image: English,
        text: "English",
        strings: english
    });

    const [options, setOptions] = useState([{
        image: Brazil,
        text: "Português",
        strings: brazil
    }]);

    const location = useLocation();

    return (
        <header>
            <h1 className="blogTitle">Rodrigo Orlandini</h1>
            
            <nav>
                {location.pathname === "/" && (
                    <>
                        <h3 className="navText selected">{selected.strings.home}</h3>
                        <Link to="/posts" className="navText">{selected.strings.posts}</Link>
                    </>
                )}
                {location.pathname === "/posts" && (
                    <>
                        <Link to="/" className="navText">{selected.strings.home}</Link>
                        <h3 className="navText selected">{selected.strings.posts}</h3>
                    </>
                )}
                {location.pathname !== "/" && location.pathname !== "/posts" && (
                    <>
                        <Link to="/" className="navText">{selected.strings.home}</Link>
                        <Link to="/posts" className="navText">{selected.strings.posts}</Link>
                    </>
                )}
            </nav>

            <LanguageSelector 
                selected={selected}
                options={options}
                setLanguage={(slc) => {
                    setSelected(slc);
                    changeLanguage(slc);
                }}
                setOptions={setOptions}
            />
        </header>
    );
};

export default Header;