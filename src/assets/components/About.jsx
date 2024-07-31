import { useState } from 'react';

function About() {
	const [about, setAbout] = useState(
		'A former professional economist and data analyst transitioning into the world of data engineering. I have a keen interest in leveraging data to influence decision making with a special focus on sustainability and resource management. Looking to connect with other professionals and organisations within the data and analytics space.'
	);

	const goToProjects = () => {
		location.href = './#experience';
	};
	return (
		<section id="about">
			<p className="section_text_1">Get to know more</p>
			<h1 className="title">About me</h1>
			<div className="section-container">
				<div className="section_pic-container">
					<img
						src="images/about-pic.png"
						alt="profile picture overlooking mountain"
						className="about-pic"
					/>
				</div>
				<div className="about-details-container">
					<div className="about-containers">
						<div className="details-container">{about}</div>
					</div>
				</div>
			</div>
			<span className="material-symbols-outlined arrow" onClick={goToProjects}>
				arrow_downward
			</span>
		</section>
	);
}
export default About;
