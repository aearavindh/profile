import { HistoryEdu, School } from "@mui/icons-material";
import React from "react";
import Accordion from "../components/Accordion";
import "./Education.css";
import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <div className="education">
      <Accordion Icon={<HistoryEdu />} body="Devaswom High School, Thirparappu">
        High School
      </Accordion>
      <Accordion
        Icon={<FaSchool size={20} style={{ paddingLeft: "3px" }} />}
        body="Arunachalam Higher Secondary School, Thiruvattar"
      >
        Higher Secondary
      </Accordion>
      <Accordion
        Icon={<School />}
        body="University College of Engineering, Villupuram"
      >
        College
      </Accordion>
    </div>
  );
}

export default Education;
