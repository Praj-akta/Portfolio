import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDocker, FaDatabase, FaLinux, FaWindows, FaApple } from 'react-icons/fa';
import { SiRedux, SiFirebase, SiStripe, SiMysql, SiMongodb } from 'react-icons/si';
import "./index.scss";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 />,
      color: "orange",
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#f0d715",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs />,
      color: "#2c98f0",
    },
    {
      id: 4,
      name: "Bootstrap CSS",
      icon: <FaCss3Alt />,
      color: "purple",
    },
    {
      id: 5,
      name: "React JS",
      icon: <FaReact />,
      color: "#4054b2",
    },
    {
      id: 6,
      name: "React Hooks",
      icon: <FaReact />,
      color: "#2c98f0",
    },
    {
      id: 7,
      name: "Angular JS",
      icon: <FaAngular />,
      color: "red",
    },
    {
      id: 8,
      name: "Redux",
      icon: <SiRedux />,
      color: "#a84cb8",
    },
    {
      id: 9,
      name: "React Native",
      icon: <FaReact />,
      color: "#a84cb8",
    },
    {
      id: 10,
      name: "Node JS",
      icon: <FaNodeJs />,
      color: "#3d3d3d",
    },
    {
      id: 11,
      name: "Database",
      icon: <FaDatabase />,
      color: "#1abc9c",
    },
    {
      id: 12,
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4054b2",
    },
    {
      id: 13,
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#2c98f0",
    },
    {
      id: 14,
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#f9bf3f",
    },
    {
      id: 15,
      name: "Stripe",
      icon: <SiStripe />,
      color: "#a84cb8",
    },
    {
      id: 16,
      name: "Mac",
      icon: <FaApple />,
      color: "#2c98f0",
    },
    {
      id: 17,
      name: "Windows",
      icon: <FaWindows />,
      color: "#a84cb8",
    },
    {
      id: 18,
      name: "Linux",
      icon: <FaLinux />,
      color: "#1abc9c",
    },
  ];

  return (
    <section className="skills-page component-spacing" id="skills">
      <div className="component-header"> my speciality </div>
      <div className="component-sub-header"> MY skills </div>
      {/* start of Skills Grid */}
      <div className="row mx-0 my-4">
        {skills.map(({ name, icon, color }, index) => (
          <div
            key={index}
            className="skill-card col-md-2 col-sm-6 p-3"
            style={{ textAlign: "center" }}>
            <div
              className="skill-icon"
              style={{ fontSize: "40px", color: color }}>
              {icon}
            </div>
            <div className="skill-name" style={{ marginTop: "10px" }}>
              <span>{name}</span>
            </div>
            <div
              className="skill-percentage"
              style={{ fontSize: "12px", color: "#777" }}>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
