function Projects( ){
    const goToContact = () => {
        location.href = './#contact';
    }
    const goToFrontEndGitHub = () => {
        window.open('https://github.com/Ahuss98/NCN-FE', '_blank');
    }
    
    const goToFrontEndLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7174462169294520322/', '_blank');
    }
    
    const goToLiveSite = () => {
        window.open('https://ncn-network.netlify.app/', '_blank');
    }
    
    const goToBackEndGitHub = () => {
        window.open('https://github.com/Ahuss98/NCN-BE', '_blank');
    }
    
    const goToBackEndLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7167617275766771712/', '_blank');
    }
    
    const goToAppGitHub = () => {
        window.open('https://github.com/keireasterbrook/iTinerary-chain-reaction?tab=readme-ov-file', '_blank');
    }
    
    const goToAppLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7182980228493774848/', '_blank');
    }
    
    const goToAppPresentation = () => {
        window.open('https://northcoders.com/project-phase/itinerary', '_blank');
    }
    const goToHussainFitGithub = () => {
        window.open('https://github.com/Ahuss98/HussainMMA', '_blank')
    }
    const goToHussainFitLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7215724347989131264/', '_blank')
    }
    const goToHussianFit =() => {
        window.open('https://main--hussainfitness.netlify.app/', '_blank')
    }
    const goToPokemonGitHub =() => {
        window.open('https://github.com/AnesTheDataGuy/de-pokemon', '_blank')
    }
    const goToPokemonLiveDemo =() => {
        window.open('https://drive.google.com/file/d/1GCH4pfkCyKKpsHPfvydk0VNxvesHdsn1/view?usp=drive_link', '_blank')
    }
    const goToETLGithub =() => {
        window.open('https://github.com/AnesTheDataGuy/totesys-ETL', '_blank')
    }
    const goToETLLiveDemo =() => {
        window.open('https://drive.google.com/file/d/1odyziS-7wzpAxBBb9YMjReQ-F7f__tog/view?usp=drive_link', '_blank')
    }
    const goToMavenMarket =() => {
        window.open('https://mavenanalytics.io/project/21709', '_blank')
    }
    const goToAdvWorks =() => {
        window.open('https://mavenanalytics.io/project/21708', '_blank')
    }
    return (
        <section id="projects">
            <p className="section_text_1">Browse my </p>
            <h1 className="title">Projects</h1>
            <div className="project-details-container">
            <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/advworks.png"  
                        alt="my back end project snapshot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">AdventureWorks Report</h2>
                   <p>PowerBI | DAX | PowerQuery</p>
                    <br></br>
                    <div className="btn-container">
                    <button className="btn btn-color-2 project-btn" onClick={goToAdvWorks}>
                            More Info
                        </button>
                    </div>
                </div>
            <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/ETL.png" 
                        alt="my front end project snpashot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Totesys ET</h2>
                    <p>Terraform | AWS | Python | CI/CD</p>
                    <br></br>
                    <div className="btn-container">
                    <button className="btn btn-color-2 project-btn" onClick={goToETLGithub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToETLLiveDemo}>
                            Live Demo
                        </button>
                    </div>
                </div>
            <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/mavenmarket.png" 
                        alt="my back end project snapshot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">MavenMarket Project</h2>
                    <p>PowerBI | DAX | PowerQuery</p>
                    <br></br>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToMavenMarket}>
                            More Info
                        </button>
                    </div>
                </div>
            <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/pokemon.png" 
                        alt="my front end project snpashot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Pokemon Battler</h2>
                    <p>Python | TDD</p>
                    <br></br>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToPokemonGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToPokemonLiveDemo}>
                            Live Demo
                        </button>
                    </div>
                </div>
                {/* <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/advworks.png" 
                        alt="my back end project snapshot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">AdventureWorks Report</h2>
                    <p>PowerBI | DAX | PowerQuery</p>
                    <br></br>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToAdvWorks}>
                            More Info
                        </button>
                    </div>
                </div>
                <div className="details-container color-container project-container">
                    <div className="article-container img-container">
                        <img 
                        src="images/ETL.png" 
                        alt="my back end project snapshot"
                        className="project-img etl-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Totesys ETL</h2>
                    <p>Terraform | AWS | Python | CI/CD</p>
                    <br></br>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToETLGithub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToETLLiveDemo}>
                            Live Demo
                        </button>
                    </div>
                </div> */}
                {/* <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/APP-Project-pic.png" 
                        alt="my app project snapshot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title"> iTinerary App</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToAppGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppLinkedIn}>
                            LinkedIn
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppPresentation}>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/HussainFit-pic.png" 
                        alt="my app project snapshot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Hussain-Fitness</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToHussainFitGithub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToHussainFitLinkedIn}>
                            LinkedIn
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToHussianFit}>
                            Live site
                        </button>
                    </div>
                </div> */}
            </div>
            <span id="projects-arrow" className="material-symbols-outlined arrow" onClick={goToContact}>
                        arrow_downward
                </span>
        </section>
    )
}
export default Projects;