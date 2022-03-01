import { HistoryEdu, School } from "@mui/icons-material";
import React from "react";
import Accordion from "../components/Accordion";
import "./Education.css";
import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <div className="education">
      <Accordion Icon={<HistoryEdu />} body="Devaswom High School, Thirparappu, Kanyakumari" percentage={95.2}>
        High School
      </Accordion>
      <Accordion
        Icon={<FaSchool size={20} style={{ paddingLeft: "3px" }} />}
        body="Arunachalam Higher Secondary School, Thiruvattar, Kanyakumari"
        percentage={93.08}
      >
        Higher Secondary
      </Accordion>
      <Accordion
        Icon={<School />}
        body="B.E in Computer Science from University College of Engineering, Villupuram"
        cgpa={7.19}
      >
        College
      </Accordion>
    </div>
  );
}

export default Education;
