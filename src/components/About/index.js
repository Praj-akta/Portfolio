import React from 'react';
import resume from '../../pdfs/resume.pdf';
import './index.scss';

const About = () => {
    return (
        <div className="about-page" id="about">
            <div className="content-header"> About me </div>
            <div className="content-header__design">
                <div /> 
                <div />
                <div />
            </div> 
            <div id="info">
                <div id="profile-photo" />
                <div id="details">
                    <div id="name"> I'm Prajakta Limje </div>
                    <div id="about-content">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy 
                        text used in laying out print, graphic or web designs. The
                        passage is attributed to an unknown typesetter in the 15th.
                        The passage is attributed to an unknown typesetter in the 15th.
                        The passage is attributed to an unknown typesetter in the 15th.
                        The passage is attributed to an unknown typesetter in the 15th.
                    </div>
                    <div id="resume-btns">
                        <a href={resume} rel="noopener noreferrer"
                            target="_blank" id="download-cv">
                            View Resume 
                        </a>
                        <div id="or-text"> or </div>
                        <a href={resume} 
                            download="resume.pdf" id="download-cv">
                            Download cv 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;