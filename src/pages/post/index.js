import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import './postDetail.css';
import './content.css';
import "../../styles/typography.css";
import "../../styles/global.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import posts from "../../posts";
import { english, brazil } from "../../content/PostContent";

const Post = () => {

    const getPost = (pathname) => {
        const id = parseInt(pathname.slice(6, pathname.length));
        return posts.filter((item) => item.id === id)[0];
    }

    const changeLanguage = (selected) => {
		if(selected.text === "English") {
			setLanguage(english);
		} else if(selected.text === "Português") {
			setLanguage(brazil);
		}
    }

    const location = useLocation();

    const [language, setLanguage] = useState(english);
    const [content, setContent] = useState(getPost(location.pathname));

    return (
        <>
            <Header 
				changeLanguage={changeLanguage}
			/>

            <div className="translateAlert">
                <h4 className="regular">{language.translatedPosts}</h4>
            </div>

            <div className="postDetailContainer">
                <img src={content.post.image} alt="road" className="postDetailImage" />

                {content.post.relatedTopics.length != 0 && (
                    <div className="relatedTopics"> 
                        <h2 className="generalTitle">{language.relatedTopics}</h2>

                        <ul className="regular">
                            <li>{content.post.relatedTopics[0]}</li>
                            <li>{content.post.relatedTopics[1]}</li>
                            <li>{content.post.relatedTopics[2]}</li>
                            <li>{content.post.relatedTopics[3]}</li>
                            <li>{content.post.relatedTopics[4]}</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="contentContainer">
                {content.post.renderContent()}
            </div>

			<Footer />
        </>
    );
}

export default Post;