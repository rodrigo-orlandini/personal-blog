import React from "react";

import './styles.css';
import "../../styles/typography.css";
import "../../styles/global.css";

const PostTitle = ({ title, date, readingTime, tag=null }) => {
    return (
        <div className="contentHeader">
            <div className="contentInfo">
                <h2 className="generalTitle">{title}</h2>
                <p className="regular">{date}</p>
            </div>

            <div className="contentTag">
                { tag && (
                    <FilterOption 
                        isReadOnly={false}
                        text={tag}
                    />
                )}
                <p>{readingTime} minutes reading</p>
            </div>
        </div>
    );
}

export default PostTitle;