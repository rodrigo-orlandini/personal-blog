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

                {/*
                    <FilterOption 
                        isReadOnly={false}
                        text={settings.tag}
                    />
                */}
            </div>

            <div className="content">
                <p className="regular">
                    &emsp;
                    <b>As everything in life, ideas also need a beginning to be realized.</b>
                </p>

                <p className="regular">
                    &emsp;
                    The main purpose of this blog is to achieve an idea. It was created because I have always loved writing and teaching,
                    in addition it is also a nice way to practice my English and some technologies.
                </p>

                <p className="regular">
                    &emsp;
                    Initially, there are some improvements to implement in this application, such as changing the language to be applied 
                    to the content of the articles, adding some alerts popups, etc. Each tasks is mapped on a 

                    <a href="https://trello.com/b/V1BVDG1c/blog" target="_blank"> Trello dashboard</a>

                    , where you can see what the priorities are and how the stuffs are going and if you are a DEV, you can see the source
                    code of this application in my
                    
                    <a href="https://github.com/rodrigo-orlandini/personal-blog" target="_blank"> GitHub</a>
                    
                    . These tasks have not been done before because implementing some solutions could bring nice articles, which we will 
                    implement together.
                    
                    When all these initial improvements are done, another suggestions and opportunities will be addressed.
                </p>

                <p className="regular">
                    &emsp;
                    At the start there will be only 2 languages and 4 topics to talk about, but according to my avaliability, another 
                    topics and languages will be added (I also love German)
                </p>

                <p className="regular">
                    &emsp;
                    I hope that the posts to come will be rewarding and useful for you.
                </p>

                <p className="regular">
                    &emsp;
                    See you in the next post! 🙏
                </p>
            </div>
        </>
    );
}

export default Introducing;