import React, { useState } from "react";

import "./search.css";
import "./postsResults.css";
import "../../styles/typography.css";
import "../../styles/global.css";

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SearchFilter from '../../components/SearchFilter';
import PostBrief from '../../components/PostBrief';
import Footer from '../../components/Footer';

import { english, brazil } from '../../content/PostsContent';
import posts from "../../posts";

const Posts = () => {

    const [language, setLanguage] = useState(english);
	const [visiblePosts, setVisiblePosts] = useState([...posts]);
	const [filters, setFilters] = useState({
		automation: false,
		development: false,
		productivity: false,
		books: false
	});

	const changeLanguage = (selected) => {
		if(selected.text === "English") {
			setLanguage(english);
		} else if(selected.text === "Português") {
			setLanguage(brazil);
		}
	}

	const onSearch = (text) => {
		if(text.length) {
			setVisiblePosts(posts.filter((item) => item.post.title.toLowerCase().includes(text.toLowerCase())));
		}
	}

	const onFilter = (option) => {
		setVisiblePosts(visiblePosts.filter((item) => {
			const activeFilters = Object.keys(filters).filter((key) => option === key ? !filters[key] : filters[key]);

			return item.post.tag ? activeFilters.indexOf(item.post.tag.toLowerCase()) !== -1 : false;
		}));
	}

	const onClear = () => {
		setFilters({
			automation: false,
			development: false,
			productivity: false,
			books: false
		});
		setVisiblePosts([...posts])
	}

    return (
        <>
            <Header 
				changeLanguage={changeLanguage}
			/>

			<div className="container search">
				<h2 className="generalTitle">{language.introTitle}</h2>

				<SearchBar 
					language={language}
					onSearch={onSearch}
				/>

				<SearchFilter
					language={language}
					filters={filters}
					setFilters={setFilters}
					onSearch={onFilter}
					onClear={onClear}
				/>
			</div>

			<div className="container postsResults">
				{visiblePosts.length > 0 ? 
					visiblePosts.map((post) => <PostBrief data={post} key={post.id} />) 
				: (
					<h4>{language.postsNotFound}</h4>
				)}
			</div>

			<Footer />
        </>
    )
}

export default Posts;