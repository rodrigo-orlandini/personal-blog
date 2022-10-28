import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './postDetail.css';
import './content.css';
import "../../styles/typography.css";
import "../../styles/global.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import posts from "../../posts";
import { english, brazil } from "../../content/PostContent";

const Post = () => {

    const largeImages = [1];

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
                <div className="postDetailImageContainer">
                    <img 
                        src={content.post.largeImage} 
                        alt="Main image of post" 
                        className={`postDetailImage ${largeImages.indexOf(content.id) !== -1 ? "large" : "small" }`} 
                    />
                </div>

                {content.post.relatedTopics.length != 0 && (
                    <div className="relatedTopics"> 
                        <h2 className="generalTitle">{language.relatedTopics}</h2>

                        <ul className="regular">
                            {content.post.relatedTopics.map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/post/${item}`} 
                                        onClick={() => setContent(getPost(`/post/${item}`))} 
                                        className="link" 
                                    >
                                        {posts.filter((post) => post.id === item)[0].post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="contentContainer">
                {content.post.renderContent(setContent)}
            </div>

			<Footer />
        </>
    );
}

export default Post;