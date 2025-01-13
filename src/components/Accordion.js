import { Add, CreditScore, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ Icon, body, children, percentage, cgpa }) {
  const [active, setActive] = useState(false);
  return (
    <div className="accordion">
      <div onClick={() => setActive(!active)} className="accordion__header">
        {Icon}
        <h3>{children}</h3>
        {active ? <Remove /> : <Add />}
      </div>
      <div
        style={
          active
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0, height: "0px" }
        }
        className="accordion__body"
      >
        <p style={active ? { opacity: 1 } : { opacity: 0 }}>{body}</p>
        <div className="accordion__score">
          <CreditScore />
          {/* <p>{percentage ? percentage + "%" : cgpa + " CGPA"}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
