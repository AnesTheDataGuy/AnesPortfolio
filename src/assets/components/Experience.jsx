function Experience(){
    const goToProjects = () => {
        location.href = './#projects';
    }
    return(
        <section id="experience">
            <p className="section_text_1">My Current</p>
            <h1 className="title">Tech Stack</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <div className="tech-title">
                        <img src="images/code-logo.png" alt="picture of me with northcoders logo behind me" className="banner-nc"/>
                        <h2 className="experience-sub-title">Programming</h2>
                        </div>
                        <div className="article-container">
                            <article>
                                <img src="images/python-logo.png" alt="html icon" />
                                <h5>Python</h5>
                            </article>
                            <article>
                                <img src="images/r-icon.png" alt="css icon" />
                                <h5>R</h5>
                            </article>
                            <article>
                                <img src="images/js-icon.png" alt="javascript icon" />
                                <h5>JavaScript</h5>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                    <div className="tech-title"> 
                        <img src="images/cloud-logo.png" alt="picture of me with my back facing camera" className="banner-nc"/>
                        <h2 className="experience-sub-title">Cloud</h2>
                    </div>
                        <div className="article-container">
                            <article>
                                <img src="images/aws-icon.png" alt="express icon" />
                                <h5>AWS</h5>
                            </article>
                            <article>
                                <img src="images/ec2-icon.png" alt="node icon" />
                                <h5>EC2</h5>
                            </article>
                            <article>
                                <img src="images/lambda-icon.png" alt="pswl icon" />
                                <h5>Lambda</h5>
                            </article>
                            <article>
                                <img src="images/S3-icon.png" alt="jest icon" />
                                <h5>S3</h5>
                            </article>
                            
                        </div>
                    </div>
                    <div className="details-container">
                    <div className="tech-title"> 
                        <img src="images/devops-logo.png" alt="picture of me with my back facing camera" className="banner-nc"/>
                        <h2 className="experience-sub-title">DevOps</h2>
                    </div>
                        <div className="article-container">
                            <article>
                                <img src="images/aws-icon.png" alt="express icon" />
                                <h5>AWS</h5>
                            </article>
                            <article>
                                <img src="images/ec2-icon.png" alt="node icon" />
                                <h5>EC2</h5>
                            </article>
                            <article>
                                <img src="images/lambda-icon.png" alt="pswl icon" />
                                <h5>Lambda</h5>
                            </article>
                            <article>
                                <img src="images/S3-icon.png" alt="jest icon" />
                                <h5>S3</h5>
                            </article>
                            
                        </div>
                    </div>
                </div>
            </div>
                <span id="xp-arrow" className="material-symbols-outlined arrow" onClick={goToProjects}>
                        arrow_downward
                </span>
        </section>
    )
}
export default Experience