import React, { useState } from "react";

import "./styles.css"

import Search from '../../assets/icons/Search.svg';

const SearchBar = ({ language, onSearch }) => {

    const [search, setSearch] = useState("");

    return (
        <div className="searchBar">
            <input 
                className="regular desk"
                type="text" 
                value={search} 
                placeholder={language.placeholderDesk}
                onChange={(e) => setSearch(e.target.value)}
            /> 

            <input 
                className="regular mobile"
                type="text" 
                value={search} 
                placeholder={language.placeholderMobile}
                onChange={(e) => setSearch(e.target.value)}
            /> 

            <button type="button" onClick={() => onSearch(search)}>
                <img src={Search} alt="Search icon" />
            </button>
        </div>
    );
}

export default SearchBar;