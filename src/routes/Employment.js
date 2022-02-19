import React from "react";
import Tile from "../components/Tile";
import "./Employment.css";

function Employment() {
  const width = "35vw";
  const height = "30vh";

  return (
    <div className="employment">
      <Tile title="Wipro" width={width} height={height} />
      <Tile title="Deloitte" width={width} height={height} />
    </div>
  );
}

export default Employment;
