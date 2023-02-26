import React from "react";
import profileImg from "../../images/profile.jpg";
import "./index.scss";

const About = () => {
  return (
    <section className={`about-page component-spacing`} id="about">
      <div className="component-header"> About me </div>
      <div className="component-sub-header"> Who am i ? </div>
      <div className="d-flex about-us-container">
        <div className="profile-photo">
          <img src={profileImg} alt="profile-img" />
        </div>
        <div className="details">
          <h1> Prajakta Limje </h1>
          <p>
            Hi <strong>Fellas</strong>, I am a current Student at Conestoga
            College. I'm pursuing my Post graduation course in Web Development and my current
            GPA is 3.8/4
          </p>
          <p>
            Before Post grad, I was working as a React Web Developer
            in a company named Infojini Inc. and hold 3+ years of experince working
            on Frontend project development and testing. I am quite proficient 
            in <strong>HTML, CSS / Bootstrap, Javascript, React, React Hooks, Redux, Redux Saga, 
            Angular JS (1.6), MongoDB, Firebase, Node JS, SQL, Git, Jira.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
