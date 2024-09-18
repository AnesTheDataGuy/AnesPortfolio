function Contact() {
    return (
        <section id="contact">
            <p className="section_text_1">Get in touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src="images/email-logo.png" alt="email icon" className="icon contact-icon"/>
                    <p><a href="mailto:anesmotam@outlook.com" target="_blank">anesmotam@outlook.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="images/linkedIn-Logo.png" alt="LinkedIn icon" className="icon contact-icon"/>
                    <p><a href="https://www.linkedin.com/in/anes-motam-59347a194/" target="_blank">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;