import React, { useState } from "react";
import "./index.scss";

function Experience() {
  const [experienceList, modifyExperienceList] = useState([
    {
      id: 1,
      showFullDescription: false,
      date: "Jan 2024 - Present",
      title: "System Analyst at Halton Region.",
      description: [
        "Implemented new features and enhancements for Halton web applications using JavaScript, React, HTML, and Tailwind CSS to meet business requirements of maximizing performance, and improving user experience by 32%.",
        "Designed & optimized SQL queries, stored procedures, and subqueries to enhance database performances in Microsoft SQL Server 2014.",
        "Conducted database design & normalization, ensuring scalable & efficient data storage solutions reducing querying complexities by 12%.",
        "Integrated PowerApps with other Microsoft 365 tools, streamlining business processes and improving user efficiency.",
        "Upgraded the Halton Vaccination project from .Net to React with RESTful APIs, modernizing the platform for scalability and usability.",
        "Managed source code using Git, ensuring proper version control and collaboration.",
        "Led Agile sprint planning and collaborated cross-functionally to improve project execution and team productivity.",
        "Demonstrated strong analytical and problem-solving skills in resolving complex issues.",
      ],
    },
    {
      id: 1,
      showFullDescription: false,
      date: "Feb 2024 - May 2024",
      title:
        "Frontend Developer (contract) at Regina Residential Resource Centre.",
      description: [
        "Designed and optimized UI components using JavaScript, React, HTML / Tailwind and Bootstrap CSS, contributing to 6% increase in returning users due to an improved user experience and visual design of the website's interface.",
        "Developed complex SQL queries to support advanced search functionality and data visualization tools.",
        "Designed new layouts using Figma to make attractive web designs.",
        "Ensured cross-browser compatibility and WCAG accessibility compliance improving inclusivity and usability.",
        "Utilized JIRA, Bitbucket, and Agile methodologies for efficient project management and cross-functional collaboration.",
        "Demonstrated excellent communication and collaboration skills while working in a fast-paced team environment.",
        "Ensured data integrity and optimized database performance in SQL Server environments.",
      ],
    },
    {
      id: 1,
      showFullDescription: false,
      date: "May 2019 - Dec 2023",
      title: "Frontend Developer at Infojini.",
      description: [
        "Designed an interactive, seamless, and dynamic website using JavaScript frameworks such as React, Angular, jQuery, with RESTful API’s and React Native for a better experience and reduced web page loading speed by 35%. ",
        "Increased performance by 9% by optimizing code, resources and implementing lazy loading techniques. ",
        "Ensure cross-browser compatibility for all web applications, leading to a 28% uplift in traffic from diverse browsers.",
        "Build a Chatbot for the Infojini Talent Dome website using Javascript, React, and Redux to obtain seamless conversation results which reduced manual intervention by 23%.",
        "Led bi-weekly stand up to ensure the team worked effectively and created boilerplate code to help onboard junior developers quickly.",
        "Conducted comprehensive unit testing and end-to-end testing to ensure code quality and adherence to best practices.",
        "Facilitated daily stand-up meetings to discuss project requirements and manage workload priorities.",
      ],
    },
    {
      id: 2,
      showFullDescription: false,
      date: "Aug 2018 - May 2019",
      title: "Web Developer at GVK",
      description: [
        "Collaborated with UI/UX designers to translate wireframes and mockups into interactive, accessible, and responsive web pages using HTML, CSS, JavaScript and React.",
        "Designed and developed customer support web applications using JavaScript and Angular to increase user engagement by 12%.",
        "Developed dynamic, mobile-first user interfaces, cross-browser compatibility, and adhering to accessibility standards (WCAG).",
        "Integrated client-side validation, error handling, and enhanced user experience through interactive UI components and animations.",
        "Conducted comprehensive unit testing & end-to-end testing using Jest and React Testing Library to ensure high-quality, maintainable code.",
        "Integrated client-side validation, error handling, and enhanced user experience through interactive UI components and animations.",
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
            <li
              key={index}
              className="timeline-item bg-white rounded ml-3 p-4 shadow"
            >
              <div data-aos="fade-left">
                <h2 className="h4 mb-0">{title}</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>
                  {date}
                </span>
                <ul
                  className={`mt-3 description-content font-weight-light ${descriptionClass}`}
                >
                  {description.map((value, index) => {
                    return (
                      <li key={index} className="description-list">
                        {value}
                      </li>
                    );
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
