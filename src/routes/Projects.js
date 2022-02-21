import React from "react";
import Tile from "../components/Tile";
import "./Projects.css";
import { projects } from "../constants/Constants";
import projectsList from "../constants/Projects";

function Projects() {
  const width = "20vw";
  const height = "35vh";

  const openProject = (project) => {
    window.open(projects[project], "_blank");
  };

  return (
    <div className="projects">
      {projectsList.map((project) => (
        <Tile
          key={project.key}
          onClick={function () {
            openProject(project.key);
          }}
          title={project.title}
          width={width}
          height={height}
          background={project.background}
        />
      ))}
    </div>
  );
}

export default Projects;
