function Experience() {
	const goToProjects = () => {
		location.href = './#projects';
	};
    const goToContact = () => {
        location.href = './#contact';
    }
	return (
		<section id="experience">
			<p className="section_text_1">My Current</p>
			<h1 className="title">Tech Stack</h1>
			<div className="experience-details-container">
				<div className="details-container tech-container" >
					<div className="tech-title">
						<h2 className="experience-sub-title">Coding</h2>
						{/* <img
							src="images/code-logo.png"
							alt="picture of me with northcoders logo behind me"
							className="banner-nc"
						/> */}
					</div>
					<div className="article-container">
						<article>
							<img src="images/python_logo_new.png" alt="html icon" className="tech-img" />
							<h5>Python</h5>
						</article>
						<article>
							<img src="images/r-icon.png" alt="css icon" className="tech-img" />
							<h5>R</h5>
						</article>
						<article>
							<img src="images/js-icon.png" alt="javascript icon" className="tech-img"/>
							<h5>JavaScript</h5>
						</article>
					</div>
				</div>
				<div className="details-container tech-container">
					<div className="tech-title">
					<h2 className="experience-sub-title">Cloud</h2>
						{/* <img
							src="images/cloud-logo.png"
							alt="picture of me with my back facing camera"
							className="banner-nc"
						/> */}
					</div>
					<div className="article-container">
						<article>
							<img src="images/aws-icon.png" alt="express icon" className="tech-img"/>
							<h5>AWS</h5>
						</article>
						<article>
							<img src="images/terraformlogo.png" alt="node icon" className="tech-img"/>
							<h5>Terraform</h5>
						</article>
					</div>
				</div>
				<div className="details-container tech-container">
					<div className="tech-title">
					<h2 className="experience-sub-title">DevOps</h2>
						{/* <img
							src="images/devops-logo.png"
							alt="picture of me with my back facing camera"
							className="banner-nc"
						/>							 */}
					</div>
					<div className="article-container">
						<article>
							<img src="images/cicd-icon.png" alt="express icon" className="tech-img"/>
							<h5>CI/CD</h5>
						</article>
						<article>
							<img src="images/bash.png" alt="node icon" className="tech-img"/>
							<h5>Bash Scripting</h5>
						</article>
						<article>
							<img src="images/git-icon.png" alt="pswl icon" className="tech-img"/>
							<h5>Git</h5>
						</article>
					</div>
				</div>
				<div className="details-container tech-container">
					<div className="tech-title">
						<h2 className="experience-sub-title">Data</h2>
						{/* <img
							src="images/data-logo.png"
							alt="picture of me with my back facing camera"
							className="banner-nc"
						/> */}
					</div>
					<div className="article-container">
						<article>
							<img src="images/sql-icon.png" alt="express icon" className="tech-img"/>
							<h5>SQL</h5>
						</article>
						<article>
							<img src="images/excel-icon.png" alt="pswl icon" className="tech-img"/>
							<h5>Excel</h5>
						</article>
						<article>
							<img src="images/powerbitransparent.png" alt="pswl icon" className="tech-img"/>
							<h5>Power BI</h5>
						</article>
					</div>
				</div>
			</div>
			<span
				id="xp-arrow"
				className="material-symbols-outlined arrow"
				onClick={goToProjects}>
				arrow_downward
			</span>
		</section>
	);
}
export default Experience;
