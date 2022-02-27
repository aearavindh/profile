import React from "react";
import "./Skills.css";
import skills from "../constants/Skills";

function Content() {
  return (
    <div className="content">
      <ul>
        <li>
          <span className="content__key">Programming Languages:</span>{" "}
          <span className="content__value">{skills.programmingLanguages}</span>
        </li>
        <li>
          <span className="content__key">Operating Systems:</span>{" "}
          <span className="content__value">{skills.operatingSystems}</span>
        </li>
        <li>
          <span className="content__key">Database:</span>{" "}
          <span className="content__value">{skills.database}</span>
        </li>
        <li>
          <span className="content__key">Frameworks and Libraries:</span>{" "}
          <span className="content__value">
            {skills.frameworksAndLibraries}
          </span>
        </li>
        <li>
          <span className="content__key">Tools:</span>{" "}
          <span className="content__value">{skills.tools}</span>
        </li>
        <li>
          <span className="content__key">Cloud:</span>{" "}
          <span className="content__value">{skills.cloud}</span>
        </li>
        <li>
          <span className="content__key">container:</span>{" "}
          <span className="content__value">{skills.container}</span>
        </li>
        <li>
          <span className="content__key">Others:</span>{" "}
          <span className="content__value">{skills.others}</span>
        </li>
      </ul>
    </div>
  );
}

export default Content;
