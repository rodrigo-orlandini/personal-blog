import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

import Card from '../Card';
import FilterOption from "../FilterOption";

const PostBrief = ({ data }) => {
    return (
        
        <Link to={`/post/${data.id}`} className="link">
            <Card>
                <div className="postImage">
                    <img src={data.post.image} alt="road"/>
                </div>

                <div className="postContent">
                    <div className="postHeader">
                        <div className="postInfo">
                            <h3>{data.post.title}</h3>
                            <p>{data.post.date}</p>
                        </div>
                        
                        <div className="postCategory">
                            {data.post.tag && (
                                <FilterOption
                                    isReadOnly={true}
                                    text={data.post.tag}
                                />
                            )}
                            <p>{data.post.readingTime} minute reading</p>
                        </div>
                    </div>

                    <div className="postText">
                        <p>{data.post.description}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default PostBrief;