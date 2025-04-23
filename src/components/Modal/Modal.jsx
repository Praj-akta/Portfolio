import React from "react";
import "./Modal.scss";

const Modal = ({ project, onClose }) => {
  const {title, subtitle, link, description} = project;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p>
          <strong>Key Features:</strong>
          <ul className="full-description">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            View Live Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
