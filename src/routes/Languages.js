import React from "react";
import Tile from "../components/Tile";
import "./Languages.css";

function Languages() {
  const width = "25vw";
  const height = "20vh";

  return <div className="languages">
    <Tile title="Tamil" width={width} height={height} />
    <Tile title="English" width={width} height={height} />
    <Tile title="Malayalam" width={width} height={height} />
  </div>;
}

export default Languages;
