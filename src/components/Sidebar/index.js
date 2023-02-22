import React, { useState } from "react";
import "./index.scss";

function Sidebar() {
  const [showMobileMenu, setMobileMenuState] = useState(false);

  const navigationMenus = [
    { id: 0, name: "home" },
    { id: 1, name: "about" },
    { id: 2, name: "work" },
    { id: 3, name: "skills" },
    { id: 4, name: "education" },
    { id: 5, name: "experience" },
  ];
  function onMenuClick() {
    if (window.innerWidth < 769) {
      setMobileMenuState(!showMobileMenu);
    }
  }
  function navigationMenuCode() {
    return navigationMenus.map(({ name }, index) => {
      return (
        <div key={index}>
          <a href={`#${name}`} onClick={(_) => onMenuClick()}>
            {name}
          </a>
        </div>
      );
    });
  }

  return (
    <div className="sidebar-container">
      <div className="navigation-bar">
        <div className="links"> {navigationMenuCode()} </div>
        <div
          className="hamburger-menu"
          onClick={(_) => setMobileMenuState(!showMobileMenu)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="navbar-text">
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/plimje"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/Praj-akta"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="tel:+1 (226) 978-1353"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
        </div>
        <div className="send-email">
          <button>
            <a
              href="mailto:prajaktalimje13@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </button>
        </div>
      </div>
      {showMobileMenu ? (
        <div className="mobile-menu">
          <p
            className="close-icon"
            onClick={(_) => setMobileMenuState(!showMobileMenu)}
          >
            &#x2715;
          </p>
          {navigationMenuCode()}
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
