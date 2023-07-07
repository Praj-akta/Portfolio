import React, { useState } from "react";
import img4 from "../../images/1.png";
import img1 from "../../images/EMS.png";
import img2 from "../../images/amazon-clone.png";
import img3 from "../../images/netflix-clone.png";
import linkImg from "../../images/link.png";
import "./index.scss";

const Work = () => {
  const [workList, setWorkList] = useState([
    {
      id: 1,
      imgUrl: img3,
      showFullDescription: false,
      title: "Netflix Clone",
      titleLink: "https://react-netflix-clone-21b46.web.app",
      subtitle: "(HTML/CSS, Tailwind CSS, React JS, Redux, Firebase, Axios)",
      description: `
        Cloned Netflix website, using HTML/CSS, Tailwind CSS, React Hooks, Redux, Firebase, Axios.
        Website has ability to create an account or sign in with existing credentials, also adding favorites movies to “My
        List” option.
        Used Firebase for storing the user's data (email id and password). Fetched data through TDMB (online Movie’s API)
        axios.`,
    },
    {
      id: 2,
      imgUrl: img2,
      showFullDescription: false,
      title: "Amazon Clone",
      subtitle:
        "(HTML/CSS, Bootstrap, React JS, Redux, Node JS, Firebase, Stripe)",
      titleLink: "https://clone-6e9aa.web.app",
      description: `
        Cloned Amazon website, using HTML, CSS/SCSS, React JS, Redux, Firebase and Stripe, Express JS.
        Website has ability to add product or remove product from the cart, order history is maintained under 'Return & orders'
        section.
        Leveraged Firebase for storing the user's data (email id and password) and orders history of user. Used Stripe for
        authentication and authorization of payments
        Node JS, Redux and React JS for hosting the payment method, for global storage and data retrieval, for single page
        application respectively.`,
    },
    {
      id: 3,
      imgUrl: img4,
      showFullDescription: false,
      title: "Food Website",
      subtitle:
        "(HTML/CSS, Bootstrap, Tailwind CSS, and JavaScript)",
      description: `
        Developed simple food website using just HTML, CSS, and JavaScript. Added animations to the website
        to make it look user friendly and attractive. Using Bootstrap, the website is mobile-friendly and 
        also checked the cross-browser compatability of this website.`,
    },
    {
      id: 4,
      imgUrl: img1,
      title: "Employee Management System",
      showFullDescription: false,
      subtitle:
        "(HTML/CSS, Bootstrap, React JS, React Hooks, Node JS, MongoDB)",
      description: `
        Developed an employee management system, where employee’s data can be created, updated, and deleted by performing CRUD operations.
        Created functional components using React hooks, also MongoDB is used for data Storage. API integration is done
        using Fetch API calls. Website has been developed and designed using HTML/CSS, Bootstrap and React JS.
      `,
    },
  ]);

  function onViewMore(data) {
    const res = workList.map((value, index) => {
      if (parseInt(value.id) === parseInt(data.id)) {
        value.showFullDescription = !value.showFullDescription;
        return value;
      }
      return value;
    });
    setWorkList(res);
  }

  return (
    <section className="work-page component-spacing" id="work">
      <div className="component-header"> WHAT I DO? </div>
      <div className="component-sub-header col-md-6 col-lg-6 p-0">
        Here are some of my Projects
      </div>
      <div className="timeline">
        {workList.map((value, index) => {
          const { imgUrl, titleLink, title, description, showFullDescription } =
            value;
          const containerClass = index % 2 === 0 ? "left" : "right";
          const descriptionClass = showFullDescription
            ? "view-full-description"
            : "";

          return (
            <div className={`container ${containerClass}`} key={index}>
              <div className="content" data-aos="zoom-in">
                <img src={imgUrl} alt="timeline-png" />
                {titleLink ? (
                  <a href={titleLink} target="_blank" className="link-title">
                    <h4>
                      {title}
                      <span>
                        <img
                          src={linkImg}
                          alt="link-img"
                          className="link-icon"
                        />
                      </span>
                    </h4>
                  </a>
                ) : (
                  <h4> {title} </h4>
                )}

                <div>
                  <div className={`description ${descriptionClass}`}>
                    {description}
                  </div>
                  <div className="view-more" onClick={(_) => onViewMore(value)}>
                    {showFullDescription ? "View less" : "View more"}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Work;
