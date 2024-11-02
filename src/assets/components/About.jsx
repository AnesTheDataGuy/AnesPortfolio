import { useState } from 'react';

function About() {
	const [about, setAbout] = useState(
		'A former professional economist with a strong background in analytical project management. I excel in leading and executing projects to the highest standards. Additionally, I played a crucial role in the draft and quality assurance stages of official government statistics on air pollution. Following my tenure in the civil service, I completed a 13-week data engineering bootcamp to further enhance my skills. I am eager to connect regarding any opportunities involving data and analytics.'
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
						alt="profile picture of anes in suit"
						className="about-pic"
					/>
				</div>
				<div className="about-details-container">
					<div className="about-containers">
						<div className="about-me-container">{about}</div>
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
