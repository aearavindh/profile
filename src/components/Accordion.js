import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ body, children }) {
  const [active, setActive] = useState(false);
  return (
    <div className="accordion">
      <div onClick={() => setActive(!active)} className="accordion__header" style={active ? { borderRadius: "10px 10px 0 0" } : {}}>
        <h3>{children}</h3>
        {active ? <Remove /> : <Add />}
      </div>
      <div
        style={active ? { display: "block" } : { display: "none" }}
        className="accordion__body"
      >
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Accordion;
