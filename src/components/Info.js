import React from "react";
import "./Info.css";

function Info({ Icon, info }) {
  return (
    <div className="info">
      {Icon && <Icon style={{ color: "gray" }} />}
      <p className="info__text">{info}</p>
    </div>
  );
}

export default Info;
