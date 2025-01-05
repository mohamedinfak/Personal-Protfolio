import React, { useContext } from "react";
import "./ProjectShowCase.css";
import { themeContext } from "../../Context";

const ProjectShowCase = ({
  image,
  projectName,
  details,
  gitLink,
  liveLink,
}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="show-case"
      style={{ background: darkMode ? "black" : "white" }}
    >
      <img src={image} alt={`${projectName} screenshot`} />
      <h2 style={{ color: darkMode ? "white" : "black" }}>{projectName}</h2>
      <p style={{ color: darkMode ? "white" : "black" }}>{details}</p>
      <div className="c-buttons">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="c-button"
        >
          Live Project
        </a>
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="c-button source"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectShowCase;
