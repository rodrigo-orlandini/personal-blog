import React from "react";

import './styles.css';
import "../../styles/typography.css";
import "../../styles/global.css";

import FilterOption from "../../components/FilterOption";

import settings from "./settings";

const Introducing = () => {		
    return (
        <>
            <div className="contentHeader">
                <div className="contentInfo">
                    <h2 className="generalTitle">{settings.title}</h2>
                    <p className="regular">{settings.date}</p>
                </div>

                <div className="contentTag">
                    <FilterOption 
                        isReadOnly={false}
                        text={settings.tag}
                    />
                    
                    <p>{settings.readingTime} minute reading</p>
                </div>
            </div>

            <div className="content">
                <p className="regular">
                    &emsp;
                    NodeJS is a popular programming language created at 2009 and since the it has growing a lot. This language
                    can be used for different purposes in software development. Here, we will use it to build RESTful APIs.
                    To help us in our development experience, we also will use the Express, a simple and powerful Framework to
                    NodeJS.
                </p>

                <p className="regular">
                    &emsp;
                    Starting from the point that you already have NodeJS, and a REST client installed (I am using Insomnia) and know 
                    what is an API, let's install the Express and BodyParser as dependencies (BodyParser is a middleware responsible
                    to retrieve data from the incoming request bodies).
                </p>

                <p className="regular">
                    &emsp;
                    To do it, you need to run the command below in your terminal:
                </p>

                <pre>
                    <code>
                        npm install express body-parser --save
                    </code>
                </pre>

                <p className="regular">
                    &emsp;
                    Everything is okay to start our CRUD API.
                </p>
            </div>
        </>
    );
}

export default Introducing;