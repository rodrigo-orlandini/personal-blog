import React from "react";

import "./styles.css"
import "../../styles/typography.css";
import "../../styles/global.css";

import FilterOption from "../FilterOption";

const SearchFilter = ({ language, filters, setFilters, onSearch }) => {

    const options = [{
        name: "automation",
        text: language.filterAutomation
    }, {
        name: "development",
        text: language.filterDevelopment
    }, {
        name: "productivity",
        text: language.filterProductivity
    }, {
        name: "books",
        text: language.filterBooks
    }];

    const onFilter = (option) => {
        let auxFilters = { ...filters };
        auxFilters[option] = !auxFilters[option];
        setFilters(auxFilters);

        onSearch(option);
    }

    return (
        <div className="filters">
            {options.map((element) => (
                <FilterOption 
                    option={element.name}
                    text={element.text}
                    status={filters[element.name] ? "selected" : ""}
                    onFilter={onFilter}
                    key={element.name}
                />
            ))}
        </div>
    );
}

export default SearchFilter;