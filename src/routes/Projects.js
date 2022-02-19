import React from "react";
import Tile from "../components/Tile";
import "./Projects.css";
import { projects } from "../constants/Constants";
import TicTacToeImage from "../assets/images/projects/tic-tac-toe.png";

function Projects() {
  const width = "20vw";
  const height = "35vh";

  const openProject = (project) => {
    window.open(projects[project], "_blank");
  };

  return (
    <div className="projects">
      <Tile
        onClick={function () {
          openProject("ticTacToe");
        }}
        title="Tic Tac Toe"
        width={width}
        height={height}
        background={TicTacToeImage}
      />
    </div>
  );
}

export default Projects;
