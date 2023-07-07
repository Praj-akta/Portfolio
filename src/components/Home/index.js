import React from "react";
import resume from "../../pdfs/Prajakta_Limje_Resume.pdf";
import "./index.scss";

const Home = () => {
  return (
    <section className="home-page" id="home">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 id="title" data-aos="fade-up">
          Hi,
          I'm Prajakta!
        </h1>
        <p id="sub-title" data-aos="fade-up">
          Web Development Student at Conestoga College
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
