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
      title: "Netflix Clone",
      link: "https://react-netflix-clone-21b46.web.app",
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
      title: "Amazon Clone",
      subtitle: "A fully responsive and secure full-stack e-commerce platform inspired by Amazon, developed using modern web technologies to replicate core shopping, payment, and user account features for a seamless retail experience.",
      link: "https://clone-6e9aa.web.app",
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
    {
      id: 3,
      imgUrl: img4,
      title: "Bonefish Grill",
      subtitle: "A visually captivating and interactive food website, crafted with HTML, CSS, and JavaScript, featuring smooth animations and a mobile-first design for a delightful culinary browsing experience, optimized for all screen sizes and browsers.",
      link: "https://transcendent-piroshki-4011dc.netlify.app",
      description: [
        "Crafted a visually engaging and responsive food-themed website using HTML, CSS, and JavaScript, with a strong focus on clean UI design and seamless UX.",
        "Implemented interactive animations and transitions to elevate user experience and visual appeal.",
        "Leveraged Bootstrap to ensure a mobile-first, responsive layout adaptable across all screen sizes.",
        "Designed intuitive page layouts with emphasis on visual hierarchy, color balance, and typographic clarity.",
        "Manually tested and ensured cross-browser compatibility for consistent performance across major browsers.",
        "Applied modern front-end best practices to create a polished, accessible interface that enhances user engagement."
      ],
    }
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
