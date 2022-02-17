import React from "react";
import "./Tile.css";

function Tile({title, width, height}) {
  return <div style={{width: width, height: height}} className="tile">
      <h3>{title}</h3>
  </div>;
}

export default Tile;
