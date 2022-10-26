import React from "react";

import "./styles.css"
import "../../styles/typography.css";
import "../../styles/global.css";

const FilterOption = ({ text, option="", onFilter=()=>{}, status=true, isReadOnly=false, isClear=false }) => {

    return (
        <div className="filterOption">
            <button 
                type="button" 
                onClick={() => {
                    if(!isReadOnly) {
                        onFilter(option);
                    }
                }}
                className={`${status.toString()} ${isClear && "clear"}`}
            >
                <span className="navText">{text}</span>
            </button>
        </div>
    );
}

export default FilterOption;