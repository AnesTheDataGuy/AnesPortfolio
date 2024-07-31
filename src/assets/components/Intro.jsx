function Intro(){
	const openResume = () => {
		window.open('resume.pdf', '_blank');
	};
	
	const linkedIn = () => {
		window.open('https://www.linkedin.com/in/anes-motam-59347a194/', '_blank');
	};
	
	const gitHub = () => {
		window.open('https://github.com/Ahuss98', '_blank');
	};
	
	const goToContact = () => {
		location.href = './#contact';
	};
	
	const goToAbout = () => {
		location.href = './#about';
	};
	return (
		<section className="section-container" id="profile">
            <div className="section_pic-container">
				<img className="imgBox" src="images/PP.png" />
            </div>
			<div className="section_text">
				<div className="section_text">
					<p className="section_text_1"> Hello, I'm</p>
					<h1 className="title"> Anes Motam</h1>
					<p className="section_text_2">
						Data Engineer
					</p>
                    <div className="btn-container">
					<button className="btn btn-cv" onClick={openResume}>
						View CV
					</button>
					<button className="btn btn-contact" onClick={goToContact}>
						Contact Me
					</button>

                    </div>
				</div>
				<div id="socials-container">
					<img
						src="images/linkedIn-Logo.png"
						alt="My linked in profile"
						className="icon"
						onClick={linkedIn}
					/>
					<img
						src="images/github-logo.png"
						alt="My gitHub in profile"
						className="icon"
						onClick={gitHub}
					/>
				</div>
			</div>
                <span id="intro-arrow" className="material-symbols-outlined arrow" onClick={goToAbout}>
                        arrow_downward
                </span>
		</section>
	);
}
export default Intro