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
        "Implemented new features and enhancements for Halton web applications using JavaScript, React, Vue, HTML, CSS, CSS GRID to meet the business requirements, maximize performance and improve user experience.",
        "Developed and Designed forms for internal Halton React applications and performed database modifications using complex SQL queries to support application’s functionality, high performance and reliability.",
        "Ensured responsive designs and cross-browser compatibility by leveraging CSS preprocessors like SASS and LESS, resulting in a consistent user experience across various devices.",
        "Designed and implemented web application along with 3rd party software integration for customer facing projects.",
        "Actively participated in Git Agile planning sessions, backlog grooming, and sprint retrospectives, contributing to iterative development and continuous improvement of frontend applications.",
        "Upgraded the Halton Vaccination project from the existing .Net framework to React, enhancing its capabilities and modernizing its technology stack.",
        "Utilized Azure DevOps for CI/CD pipelines, automated testing, and deployment processes, streamlining development workflows and improving team collaboration, alongside Jenkins for automation and Docker for containerization.",
        "Conducted MySQL database optimization, including indexing, query optimization, and performance tuning to improve efficiency and response times."
      ],
    },
    {
      id: 1,
      showFullDescription: false,
      date: "Jan 2024 - Apr 2024",
      title: "Frontend Developer (3 months contract) at Regina Residential Resource Centre.",
      description: [
        "Enhanced UI components using HTML, CSS, and JavaScript, contributing to an improved user experience and visual design of the website's interface.",
        "Designed and implemented user authentication features, including Sign In, Reset Password, and Login functionalities.",
        "Added new features like advanced search functionality, data visualization tools, and customizable dashboards to improve user experience.",
        "Proficient in addressing cross-browser compatibility issues and implementing effective solutions for seamless user experiences.",
        "Skilled in creating UI layouts using SASS, LESS, and CSS GRID, focusing on optimal design and layout structures.",
        "Managed code versioning and team collaboration through Git, ensuring project alignment with evolving requirements and industry standards.",
        "Understanding of Web Content Accessibility Guidelines (WCAG) for developing accessible web applications."
      ],
    },
    {
      id: 1,
      showFullDescription: false,
      date: "May 2019 - Dec 2023",
      title: "Frontend Developer at Infojini.",
      description: [
        "Developed websites, mobile applications, and landing pages from wireframe through deployment.",
        "Designed an interactive, dynamic HR portal and Veteran websites using HTML, CSS with modern JavaScript frameworks as React, Angular and React Native for better experience.",
        "Developed Unit and Load test cases to improve application architecture, maintainability, and scalability.",
        "Designed and implemented web application along with 3rd party software integration for customer facing projects.",
        "Led a team of frontend developers in designing and implementing complex web applications.",
        "Mentored junior developers, providing guidance on technical challenges and career growth opportunities.",
        "Worked on building Chatbot for Infojini Talentdome website and integrated using Javascript, React, Redux and Saga to obtain results in the form of text, application forms, external links, or options.",
        "Developed responsive, mobile-first approach application which could scale with both increase in interaction complexity and volume.",
        "Drive daily stand-up meetings to discuss new project requirements, scope, tasks, and log time estimates for the task assigned, worked with product team for deliverables and sprint planning.",
        "Experience in creating, prioritizing, and managing tasks, bugs and issues through JIRA.",
        "Demonstrated strong team-oriented skills, agile development, and delivering high-quality multiple projects before deadlines."
      ],
    },
    {
      id: 2,
      showFullDescription: false,
      date: "Aug 2018 - May 2019",
      title:
        "Web Developer at GVK",
      description: [
        "Collaborated with the team to design and develop in-house applications using HTML, CSS, JavaScript and ReactJS.",
        "Ensured feasibility of UI/UX designs and designed user friendly web pages using responsive design.",
        "Updated several JavaScript projects and applications with new design and development changes.",
        "Implemented responsive design principles to ensure compatibility across devices and browsers.",
        "Collaborated with UI/UX designers to translate wireframes and mockups into interactive prototypes.",
        "Participated in sprint planning, daily stand-ups, and retrospectives to ensure project milestones were met.",
        "Pair programmed with senior developers throughout the project life cycle to do code reviews and enforce standard coding practice."
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
