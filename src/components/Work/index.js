import React, {useState} from "react";
import img4 from "../../images/1.png";
import img1 from "../../images/EMS.png";
import img2 from "../../images/amazon-clone.png";
import img3 from "../../images/netflix-clone.png";
import Modal from "../Modal/Modal";
import "./index.scss";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const workList = [
    {
      id: 1,
      imgUrl: img3,
      showFullDescription: false,
      title: "Netflix Clone",
      // titleLink: "https://react-netflix-clone-21b46.web.app",
      subtitle: "A fully responsive and feature-rich clone of the Netflix platform, developed using modern web technologies to replicate core functionalities and provide a seamless user experience.",
      description: [
        "Developed using HTML/CSS, Tailwind CSS, React Hooks, Redux, Firebase, and Axios.",
        " Implemented user authentication with Firebase, allowing users to register or sign in securely using their email and password.",
        "Built a personalized 'My List' feature where users can add and manage favorite movies.",
        " Integrated the TMDB (The Movie Database) API via Axios to dynamically fetch movie data including posters, titles, and descriptions.",
        "Utilized Redux for global state management, ensuring smooth data flow and consistent application behavior.",
        "Optimized for responsive design and cross-browser compatibility, ensuring consistent performance across devices and platforms.",
        "Firebase used for real-time data storage, including user credentials and favorite movie lists."
      ],
    },
    {
      id: 2,
      imgUrl: img2,
      showFullDescription: false,
      title: "Amazon Clone",
      subtitle: "A fully responsive and secure full-stack e-commerce platform inspired by Amazon, developed using modern web technologies to replicate core shopping, payment, and user account features for a seamless retail experience.",
      // titleLink: "https://clone-6e9aa.web.app",
      description: [
        "Engineered a fully functional Amazon e-commerce clone using HTML, SCSS, React JS, Redux, Node JS, Firebase, Stripe, and Express JS.",
        "Implemented secure user authentication and data storage with Firebase, enabling users to register, log in, and manage order history effectively.",
        "Built shopping cart functionality with the ability to add, update, and remove products dynamically.",
        "Designed an intuitive order history section under 'Return & Orders' to track previous purchases and improve user experience.",
        "Integrated Stripe for secure payment processing, supporting real-time authorization and payment confirmation.",
        "Utilized Redux for state management to handle global application state such as cart items and user sessions.",
        "Deployed Express JS and Node JS for backend operations and API routing, ensuring smooth communication between frontend and server.",
        "Developed a seamless single-page application architecture to enhance performance, reduce load times, and ensure smooth user navigation.",
        "Ensured mobile responsiveness and cross-browser compatibility to deliver a consistent experience across all devices."
      ]
    },
    // {
    //   id: 3,
    //   imgUrl: img4,
    //   showFullDescription: false,
    //   title: "Food Website",
    //   subtitle:
    //     "(HTML/CSS, Bootstrap, Tailwind CSS, and JavaScript)",
    //   description: `
    //     Developed simple food website using just HTML, CSS, and JavaScript. Added animations to the website
    //     to make it look user friendly and attractive. Using Bootstrap, the website is mobile-friendly and 
    //     also checked the cross-browser compatability of this website.`,
    // },
    // {
    //   id: 4,
    //   imgUrl: img1,
    //   title: "Employee Management System",
    //   showFullDescription: false,
    //   subtitle:
    //     "(HTML/CSS, Bootstrap, React JS, React Hooks, Node JS, MongoDB)",
    //   description: `
    //     Developed an employee management system, where employee’s data can be created, updated, and deleted by performing CRUD operations.
    //     Created functional components using React hooks, also MongoDB is used for data Storage. API integration is done
    //     using Fetch API calls. Website has been developed and designed using HTML/CSS, Bootstrap and React JS.
    //   `,
    // },
  ]
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="work-page component-spacing" id="work">
      <div className="component-header">WHAT IS MY TALENT?</div>
      <div className="component-sub-header">
        Here are some of my Projects
      </div>

      <div className="projects-grid mt-5">
        {workList.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => handleProjectClick(project)}>
            <img src={project.imgUrl} alt="project" className="project-image" />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};
export default Work;
