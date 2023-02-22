import React from "react";
import "./index.scss";

function Skills() {
  const programmingSkills = [
    {
      id: 1,
      name: "HTML",
      color: "#1abc9c",
      percentage: "95",
    },
    {
      id: 2,
      name: "CSS",
      color: "#f9bf3f",
      percentage: "95",
    },
    {
      id: 3,
      name: "JavaScript",
      color: "#a84cb8",
      percentage: "80",
    },
    {
      id: 3,
      name: "BootStrap CSS",
      color: "#a84cb8",
      percentage: "90",
    },
  ];
  const frameworks = [
    {
      id: 1,
      name: "React JS",
      color: "#4054b2",
      percentage: "90",
    },
    {
      id: 2,
      name: "React Hooks",
      color: "#2c98f0",
      percentage: "90",
    },
    {
      id: 3,
      name: "Angular JS (1.6)",
      color: "#f9bf3f",
      percentage: "75",
    },
    {
      id: 4,
      name: "Redux",
      color: "#a84cb8",
      percentage: "90",
    },
    {
      id: 5,
      name: "React Native",
      color: "#a84cb8",
      percentage: "85",
    },
    {
      id: 6,
      name: "Node JS",
      color: "#3d3d3d",
      percentage: "75",
    },
    {
      id: 7,
      name: "Flutter",
      color: "#1abc9c",
      percentage: "70",
    },
  ];
  const databases = [
    {
      id: 1,
      name: "MySQL",
      color: "#4054b2",
      percentage: "85",
    },
    {
      id: 2,
      name: "MongoDB",
      color: "#2c98f0",
      percentage: "90",
    },
    {
      id: 3,
      name: "Firebase",
      color: "#f9bf3f",
      percentage: "90",
    },
    {
      id: 4,
      name: "Stripe",
      color: "#a84cb8",
      percentage: "70",
    },
  ];
  const operatingSystems = [
    {
      id: 1,
      name: "Mac",
      color: "#2c98f0",
      percentage: "80",
    },
    {
      id: 2,
      name: "Windows",
      color: "#a84cb8",
      percentage: "85",
    },
    {
      id: 3,
      name: "Linux",
      color: "#1abc9c",
      percentage: "82",
    },
  ];

  return (
    <section className="skills-page component-spacing" id="skills">
      <div className="component-header"> my speciality </div>
      <div className="component-sub-header"> MY skills </div>
      <div className="component-header"> programming languages </div>
      {/* start of programming languages */}
      <div className="row mx-0 my-4">
        {programmingSkills.map(({ name, percentage, color }, index) => {
          return (
            <div
              key={index}
              data-aos="fade-left"
              className="progress_bar col-md-6 p-0 pr-3"
            >
              <div className="pro-bar">
                <div className="progress_bar_title">
                  {name}
                  <span className="progress_number">{percentage}%</span>
                </div>
                <span
                  className="progress-bar-inner"
                  style={{
                    backgroundColor: `${color}`,
                    width: `${percentage}%`,
                  }}
                  data-value={percentage}
                  data-percentage-value={percentage}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
      {/* end of programming languages */}

      <div className="component-header"> Frameworks </div>
      {/* start of Frameworks */}
      <div className="row mx-0 my-4">
        {frameworks.map(({ name, percentage, color }, index) => {
          return (
            <div
              key={index}
              data-aos="fade-left"
              className="progress_bar col-md-6 p-0 pr-3"
            >
              <div className="pro-bar">
                <div className="progress_bar_title">
                  {name}
                  <span className="progress_number">{percentage}%</span>
                </div>
                <span
                  className="progress-bar-inner"
                  style={{
                    backgroundColor: `${color}`,
                    width: `${percentage}%`,
                  }}
                  data-value={percentage}
                  data-percentage-value={percentage}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
      {/* end of Frameworks */}

      <div className="component-header"> Database </div>
      {/* start of Database */}
      <div className="row mx-0 my-4">
        {databases.map(({ name, percentage, color }, index) => {
          return (
            <div
              key={index}
              data-aos="fade-left"
              className="progress_bar col-md-6 p-0 pr-3"
            >
              <div className="pro-bar">
                <div className="progress_bar_title">
                  {name}
                  <span className="progress_number">{percentage}%</span>
                </div>
                <span
                  className="progress-bar-inner"
                  style={{
                    backgroundColor: `${color}`,
                    width: `${percentage}%`,
                  }}
                  data-value={percentage}
                  data-percentage-value={percentage}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
      {/* end of Database */}

      <div className="component-header"> Operating System </div>
      {/* start of Operating System */}
      <div className="row mx-0 my-4">
        {operatingSystems.map(({ name, percentage, color }, index) => {
          return (
            <div
              key={index}
              data-aos="fade-left"
              className="progress_bar col-md-6 p-0 pr-3"
            >
              <div className="pro-bar">
                <div className="progress_bar_title">
                  {name}
                  <span className="progress_number">{percentage}%</span>
                </div>
                <span
                  className="progress-bar-inner"
                  style={{
                    backgroundColor: `${color}`,
                    width: `${percentage}%`,
                  }}
                  data-value={percentage}
                  data-percentage-value={percentage}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
      {/* end of Operating System */}
    </section>
  );
}
export default Skills;
