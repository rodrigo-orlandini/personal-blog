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
                        
                        {data.post.tag && (
                            <div className="postCategory">
                                <FilterOption
                                    isReadOnly={true}
                                    text={data.post.tag}
                                />
                            </div>
                        )}
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