import { useState } from "react";


function About(){
    const [selectedBtn, setSelectedBtn] = useState(null);

    const [about,setAbout] = useState('A former professional economist and data analyst transitioning into the world of data engineering. I have a keen interest in leveraging data to influence decision making with a special focus on sustainability and resource management. Looking to connect with other professionals and organisations within the data and analytics space.')
    const goToProjects = () => {
        location.href = './#experience';
    }
   
        const toggleAbout = (info) =>{
            if(info === 'exp'){
                setAbout([{img:"images/NC-logo.png",h3:'Experience',p:'Completed a 13-Week Full Stack Software Development Bootcamp as a Trainee Software Developer at Northcoders focusing on a PERN Stack'}])
            }
            if(info === 'edu'){
                setAbout([{img:"images/Education-logo.png",h3:'Education',p:'Studied Computer Systems Engineering at the University of Kent and completed A-Levels in Maths, Economics and Phisics'}])
            }
            if(info === 'PI'){
                setAbout([{img:"images/PI-logo.png",h3:'Personal Info',p:'A Career changer from a Personal Trainer and Amateur Fighter. I love to solve problems and take on challenges, currently chasing my Black Belt as a Software Developer.'}])
            }
            setSelectedBtn(info);
        }

 
    return(
    <section id="about">
        <p className="section_text_1">Get to know more</p>
        <h1 className="title">About me</h1>
        <div className="section-container">
            <div className="section_pic-container">
                <img src="images/about-pic.png" alt="profile picture overlooking mountain" className="about-pic" />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                      {about}
                    </div>
                </div>
                
            </div>
        </div>
                <span className="material-symbols-outlined arrow" onClick={goToProjects}>
                        arrow_downward
                </span>
    </section>
    )
}
export default About;