import React from "react";
import profileImg from "../../images/profile.jpg";
import "./index.scss";

const About = () => {
  return (
    <section className={`about-page component-spacing`} id="about">
      <div className="component-header"> About me </div>
      <div className="component-sub-header"> Who am i ? </div>
      <div className="about-us-container">
        <div className="details">
          Hello! I’m Prajakta Limje, a passionate Frontend Software Developer with a strong commitment
          to crafting intuitive, high-performing web applications. With a deep
          understanding of modern web technologies, I specialize in building
          dynamic and responsive user interfaces that deliver exceptional user
          experiences. I am proficient in a variety of front-end tools and
          frameworks, including <strong>React</strong>,{" "}
          <strong>JavaScript/TypeScript</strong>, <strong>HTML5</strong>,{" "}
          <strong>CSS3</strong>, and modern CSS preprocessors like{" "}
          <strong>SASS</strong> and <strong>LESS</strong>, ensuring clean,
          maintainable, and efficient code.
          <br /> <br />
          My expertise spans from designing{" "}
          <strong>responsive, mobile-first web applications</strong> to
          optimizing <strong>cross-browser compatibility</strong>, ensuring that
          every user interaction is smooth and seamless across devices and
          platforms. I am also experienced in integrating <strong>APIs</strong>,
          both <strong>RESTful</strong> and <strong>GraphQL</strong>, to enhance
          functionality and performance, and I prioritize{" "}
          <strong>performance optimization</strong> to deliver faster and more
          efficient applications.
          <br /> <br />
          With a solid understanding of <strong>backend integration</strong>,
          including working with databases like <strong>MySQL</strong>,{" "}
          <strong>MongoDB</strong>, and <strong>Firebase</strong>, as well as{" "}
          <strong>cloud technologies</strong> such as <strong>AWS</strong>, I
          bridge the gap between front-end and back-end systems to create
          comprehensive, scalable solutions. I am also deeply committed to
          maintaining high-quality code through <strong>unit testing</strong>{" "}
          and <strong>end-to-end testing</strong>, ensuring stability and
          reliability in every project. Driven by a passion for{" "}
          <strong>problem-solving</strong> and{" "}
          <strong>continuous learning</strong>, I thrive on challenges and enjoy
          collaborating with teams to deliver innovative solutions that meet
          both user needs and business goals. My focus is always on delivering
          top-tier, accessible, and user-friendly applications that elevate the
          digital experience.
        </div>
      </div>
    </section>
  );
};
export default About;
