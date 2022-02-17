import React from "react";
import Accordion from "../components/Accordion";
import "./Education.css";

function Education() {

  return <div className="education">
    <Accordion body="Devaswom High School, Thirparappu" >High School</Accordion>
    <Accordion body="Arunachalam Higher Secondary School, Thiruvattar" >Higher Secondary</Accordion>
    <Accordion body="University College of Engineering, Villupuram" >College</Accordion>
  </div>;
}

export default Education;
