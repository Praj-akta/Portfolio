import React from "react";
import resume from "../../pdfs/Prajakta_Limje_Resume.pdf";
import "./index.scss";

const Home = () => {
  return (
    <section className="home-page" id="home">
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 id="title">Hey, I'm Prajakta!</h1>
        <p id="sub-title">
          Innovating the web with purpose and precision. As a Front-End
          Engineer, I create accessible, user-friendly digital experiences that
          leave a lasting impact.
        </p>
        <a
          href={resume}
          id="download-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
