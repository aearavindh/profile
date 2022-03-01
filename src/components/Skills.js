import React from "react";
import "./Skills.css";
import skills from "../constants/Skills";

function Skills() {
  return (
    <div className="skills">
      <ul className="skills__list">
        <li>
          <span className="skills__key">Programming Languages:</span>{" "}
          <span className="skills__value">{skills.programmingLanguages}</span>
        </li>
        <li>
          <span className="skills__key">Database:</span>{" "}
          <span className="skills__value">{skills.database}</span>
        </li>
        <li>
          <span className="skills__key">Frameworks and Libraries:</span>{" "}
          <span className="skills__value">
            {skills.frameworksAndLibraries}
          </span>
        </li>
        <li>
          <span className="skills__key">Tools:</span>{" "}
          <span className="skills__value">{skills.tools}</span>
        </li>
        <li>
          <span className="skills__key">Cloud and Container:</span>{" "}
          <span className="skills__value">{skills.cloudAndContainer}</span>
        </li>
        <li>
          <span className="skills__key">Others:</span>{" "}
          <span className="skills__value">{skills.others}</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
