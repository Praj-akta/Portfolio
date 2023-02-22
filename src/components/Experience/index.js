import React, { useState } from "react";
import "./index.scss";

function Experience() {
  const [experienceList, modifyExperienceList] = useState([
    {
      id: 1,
      showFullDescription: false,
      date: "May, 2019 - October, 2022",
      title: "React JS Web Developer at Infojini INC.",
      description: [
        "Developed websites, mobile applications, and landing pages from wireframe through deployment.",
        "Planned development as per Standardized output through a new, responsive, mobile-first approach and strategy. Enhanced UX and UI designs for technical feasibility.",
        "Collaborated with product team members for feature gathering and sprint planning.",
        "Developed Unit and Load test cases to improve application architecture, maintainability, and scalability. Designed an interactive, dynamic HR portal and Veteran websites using HTML, CSS with modern JavaScript frameworks as React, Angular and React Native for better experience.",
      ],
    },
    {
      id: 2,
      showFullDescription: false,
      date: "August, 2018 - May, 2019",
      title:
        "Web Developer Intern at GVK, Mumbai International Airport.",
      description: [
        "Worked with customers for requirement gathering and understand the scope of the project. Conducted research, gathered information from multiple sources and presented results.",
        "Designed user friendly web pages using HTML, CSS and REACT JS.",
        "Performed load, unit testing and provided scaling parameters to infra team.",
        "Prioritized and accomplished multiple tasks within established timeframes.",
      ],
    },
  ]);

  function onViewMore(data) {
    const res = experienceList.map((value, index) => {
      if (parseInt(value.id) === parseInt(data.id)) {
        value.showFullDescription = !value.showFullDescription;
        return value;
      }
      return value;
    });
    modifyExperienceList(res);
  }

  return (
    <section className="experience-page component-spacing" id="experience">
      <div className="component-header"> Experience </div>
      <div className="component-sub-header"> Work Experience </div>
      {/* timeline start */}
      <ul className="timeline">
        {experienceList.map((value, index) => {
          const { date, title, description, showFullDescription } = value;
          const descriptionClass = showFullDescription
            ? "view-full-description"
            : "";

          return (
            <li key={index}
              className="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div data-aos="fade-left">
                <h2 className="h4 mb-0">{title}</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>
                  {date}
                </span>
                <ul className={`mt-3 description-content font-weight-light ${descriptionClass}`}>
                  {description.map((value, index) => {
                    return (
                        <li key={index} className="description-list"> 
                            {value} 
                        </li>
                    )
                  })}
                </ul>
                <div className="view-more" onClick={(_) => onViewMore(value)}>
                  {showFullDescription ? "View less" : "View more"}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* timeline end */}
    </section>
  );
}

export default Experience;
