import React from "react";

import "./styles.css";
import "../../styles/typography.css"

import Down from "../../assets/icons/Down.svg";

const LanguageSelector = ({ selected, options, setLanguage, setOptions }) => {

    const onSelectLanguage = (index) => {
        setLanguage(options[index]);

        let newOptions = [...options];
        newOptions = newOptions.filter((option) => option.text !== options[index].text);
        newOptions.push(selected);
        newOptions.sort()
        setOptions(newOptions);
    }

    return (
        <div className="selector" id="languageSelector">
            <input
                type="checkbox"
                className="selectorCheckbox"
                id="navToggle"
            />
            <label htmlFor="navToggle" className="selectorButton">
                <div className="wrapper purple">
                    <div className="languageWrapper">
                        <img src={selected.image} alt={selected.text}/>
                        <h4 className="lightRegular">{selected.text}</h4>
                    </div>

                    <img src={Down} alt="Down Arrow" className="arrow"/>
                </div>
            </label>

            { options.map((language, index) => (
                <div className="wrapper light" key={index}>
                    <div className="languageWrapper" onClick={() => onSelectLanguage(index)}>
                        <img src={language.image} alt={language.text}/>
                        <h4 className="regular">{language.text}</h4>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default LanguageSelector;