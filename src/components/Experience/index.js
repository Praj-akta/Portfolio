import React from "react";
import "./index.scss";

function Experience() {
  const experienceList = [
    {
      date: "Jan 2024 - Present",
      title: "Frontend Software Developer",
      company: "Regional Municipality of Halton",
      description: [
        "Improved Halton web applications using HTML5, CSS3, JavaScript/TypeScript, jQuery, and React with a focus on front-end optimization and UX, achieving a 32% faster page load time and an 8% increase in user interaction.",
        "Developed and maintained scalable CSS preprocessor stylesheets using SASS and LESS, introducing reusable mixins and functions, increasing code maintainability and reusability by 40%.",
        "Engineered responsive, mobile-first web designs with cross-browser compatibility, enhancing performance across devices.",
        "Designed and optimized SQL queries and stored procedures to enhance read/write performance, resulting in a 12% decrease in database warehouse load.",
        "Integrated session-aware RESTful APIs to streamline frontend-backend communication, improving responsiveness by 25% and refining the user experience by 15%.",
        "Wrote unit tests and end-to-end tests to ensure feature stability and reliability, maintaining a code coverage threshold of 90%.",
        "Integrated GitHub Actions to automate build, test, and deployment workflows, achieving 99.9% uptime and reducing manual errors in the Halton Vaccination project.",
        "Collaborated with product managers, designers, and backend engineers to deliver projects on time, improving delivery efficiency and reducing time-to-market by one sprint."
      ],
    },
    {
      date: "Feb 2024 - May 2024",
      title: "Frontend Developer (contract)",
      company: "Regina Residential Resource Centre.",
      description: [
        "Spearheaded and fine-tuned UI components using JavaScript, React, HTML / Tailwind, and Bootstrap CSS, contributing to a 6% increase in returning users due to an upgrade in user experience and visual design of the website's interface.",
        "Integrated and calibrated over 5 third-party APIs, improving real-time data display efficiency by 30% and reducing API call latency by 9%.",
        "Delivered 3 user interface layouts using Figma, leading to a 19% improvement in user engagement due to visually appealing designs.",
        "Ensured cross-browser compatibility and WCAG 2.1 Level AA compliance, enriching accessibility for users with disabilities by 23%.",
        "Orchestrated secure data handling and user authentication using token-based access control and role-based permissions.",
        "Streamlined project workflows in JIRA, boosting sprint completion rates by 15% through Agile practices and cutting deployment time by 20% via Bitbucket integration."
      ]
    },
    {
      date: "May 2019 - Dec 2022",
      title: "Frontend Engineer",
      company: "Infojini",
      description: [
        "Engineered a dynamic and responsive website using HTML, CSS, JavaScript/TypeScript, React, Angular, and jQuery, integrating RESTful and GraphQL APIs to enhance UX and cut page load times by 35%.",
        "Elevated performance by 9% through strategic code refactoring, resource optimization, and the adoption of lazy loading.",
        "Achieved an 8% increase in multi-browser traffic by fine-tuning cross-browser compatibility across all applications.",
        "Developed a chatbot for the Infojini Talent Dome site using JavaScript, React, and Redux, dropping manual support efforts by 57%.",
        "Led team of 3 junior developers, fostering collaboration and upholding code quality through peer mentorship and reviews.",
        "Validated code integrity and functionality via robust unit testing with Jest and end-to-end testing frameworks, aligning with industry best practices."
      ],
    },
    {
      date: "Aug 2018 - May 2019",
      title: "Web Developer",
      company: "GVK",
      description: [
        "Partnered with UI/UX designers to convert wireframes into responsive, interactive web pages using HTML, CSS, JavaScript, and React, accelerating delivery timelines by 15% due to component reusability.",
        "Crafted customer support applications with JavaScript and Angular, driving a 12% increase in user engagement through intuitive workflows and real-time updates.",
        "Delivered mobile-first, accessible interfaces compliant with WCAG 2.1 standards and ensured consistent behavior across major browsers.",
        "Elevated user experience through client-side validation, error handling, and dynamic UI animations, curtailing bounce rates by 18%.",
        "Strengthened code reliability through end-to-end testing with Jest and React Testing Library, scaling down post-deployment bugs by 30%."
      ],
    },
  ];

  return (
    <section className="experience-page component-spacing" id="experience">
      <div className="component-header"> Experience </div>
      <div className="component-sub-header"> Work Experience </div>
      {/* timeline start */}
      <ul className="timeline">
        {experienceList.map((value, index) => {
          const { date, title, description, company } = value;
          return (
            <li
              key={index}
              className="timeline-item rounded ml-3 p-4 shadow">
              <div data-aos="fade-left">
                <h2 className="h4 mb-0">{title}</h2>
                <span className="small">Company: {company} | </span>
                <span className="small">
                  <i className="fa fa-clock-o mr-1"></i>
                  {date}
                </span>
                <ul
                  className={`mt-3 description-content font-weight-light`}>
                  {description.map((value, index) => {
                    return (
                      <li key={index} className="description-list">
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Experience;
