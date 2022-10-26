import React, { useState } from 'react';

import './welcome.css';
import './techSkills.css';
import './professionalExperience.css';
import './topics.css';
import "../../styles/typography.css";
import "../../styles/global.css";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

import ProfilePic from "../../assets/images/ProfilePic.png";
import ReactLogo from "../../assets/images/React.png";
import Flask from "../../assets/images/Flask.png";
import Android from "../../assets/images/Android.png";

import AvailableToWork from "../../assets/images/AvailableToWork.png";
import ZF from "../../assets/images/ZF.png";
import Lenscope from "../../assets/images/Lenscope.png";

import Development from "../../assets/icons/Development.svg";
import Automation from "../../assets/icons/Automation.svg";
import Productivity from "../../assets/icons/Productivity.svg";
import Books from "../../assets/icons/Books.svg";

import { english, brazil } from '../../content/HomeContent';

const Home = () => {

	const [language, setLanguage] = useState(english);

	const changeLanguage = (selected) => {
		if(selected.text === "English") {
			setLanguage(english);
		} else if(selected.text === "Português") {
			setLanguage(brazil);
		}
	}

  	return (
		<>
			<Header 
				changeLanguage={changeLanguage}
			/>

			<div className="container intro">
				<div className='titleContainer'>
					<h2 className="generalTitle title">
						{language.introTitleGreetings}
						<span className="nameTitle name">Rodrigo</span>
						.
					</h2>
					<h2 className="generalTitle title">{language.introTitleWelcoming}</h2>
				</div>
				
				<img src={ProfilePic} alt="Rodrigo's Picture" className="profilePicture"/>
			</div>

			<div className="container techSkills">
				<h2 className="generalTitle title">{language.technicalSkillTitle}</h2>

				<div className="cardContainer">
					<Card>
						<img src={ReactLogo} alt="React's Logo" className="skillImage"/>
						<h4>React<br/>React Native</h4>
					</Card>

					<Card>
						<img src={Flask} alt="Flask's Logo" className="skillImage"/>
						<h4>Python<br/>Flask</h4>
					</Card>

					<Card>
						<img src={Android} alt="Android's Logo" className="skillImage"/>
						<h4>Kotlin<br/>Android</h4>
					</Card>
				</div>
			</div>

			<div className='container professionalExperience'>
				<h2 className="generalTitle title">{language.professionalExperienceTitle}</h2>

				<div className='jobs'>
					<div className='details'>
						<img src={AvailableToWork} alt="Available to work" className="workImage"/>
						<h4>{language.professionalExperienceAvailable}</h4>
					</div>

					<div className='details'>
						<img src={ZF} alt="ZF Logo" className="workImage"/>
						<h4>ZF Friedrichshafen</h4>
						<p>{language.professionalExperienceZF}</p>
						<p>(2020 - 2022)</p>
					</div>

					<div className='details'>
						<img src={Lenscope} alt="Lenscope" className="workImage"/>
						<h4>Lenscope</h4>
						<p>{language.professionalExperienceLenscope}</p>
						<p>(2020)</p>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='topics'>
					<h2 className="generalTitle title">{language.topicsTitle}</h2>
					<p>{language.topicsSub}</p>

					<div className='items'>
						<Card>
							<img src={Development} alt="Development" className="topicsImage"/>
							<h4>{language.topicsDevelopment}</h4> 
						</Card>

						<Card>
							<img src={Automation} alt="Automation" className="topicsImage"/>
							<h4>{language.topicsAutomation}</h4> 
						</Card>

						<Card>
							<img src={Productivity} alt="Productivity" className="topicsImage"/>
							<h4>{language.topicsProductivity}</h4> 
						</Card>

						<Card>
							<img src={Books} alt="Books" className="topicsImage"/>
							<h4>{language.topicsBooks}</h4> 
						</Card>
					</div>
				</div>
			</div>

			<Footer />
		</>
  	);
}

export default Home;