import React from "react";
import "./Tile.css";

function Tile({ title, width, height, background, onClick }) {
  const style = { width: width, height: height };

  return (
    <div
      onClick={onClick}
      style={
        background
          ? {
              ...style,
              backgroundImage:
                "linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5))," +
                "url(" +
                background +
                ")",
              backgroundSize: width + " " + height,
            }
          : { ...style, backgroundColor: "gray" }
      }
      className="tile"
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Tile;
