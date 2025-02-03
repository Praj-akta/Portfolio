import React from "react";
import resume from "../../pdfs/Prajakta_Limje_Resume.pdf";
import "./index.scss";

const Home = () => {
  return (
    <section className="home-page" id="home">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 id="title" data-aos="fade-up">
          Hey,
          I'm Prajakta!
        </h1>
        <p id="sub-title" data-aos="fade-up">
          I'm a passionate Frontend Developer with expertise in crafting dynamic and user-friendly 
          web applications. With several years of hands-on experience in technologies like React, 
          Angular, JavaScript, HTML5, CSS3, and more, I've delivered efficient and scalable solutions 
          that improve performance and enhance user experiences across various platforms.
        </p>
        <a
          href={resume}
          id="download-cv"
          data-aos="fade-up"
          download="Resume(Prajakta Limje).pdf"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
