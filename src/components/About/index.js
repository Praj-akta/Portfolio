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
            Hi <strong>Fellas</strong>, I'm a recent graduate of Conestoga college with Post
            Graduate Certificate in Web development with GPA 3.8/4. I'm looking for an opportunity
            to work as a FrontEnd developer to produce intuitive and smooth applications and advance to full-stack development.
          </p>
          <p>
            I have 3+ years of experience working as a Frontend Web Developer
            in a company named Infojini Inc. I am quite proficient 
            in <strong>HTML5, CSS, Javascript / Typescript, React, Hooks, Redux, Redux Saga, 
            Angular, MongoDB, Firebase, Node JS, SQL, Git, Jira.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
