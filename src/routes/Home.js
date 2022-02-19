import React from "react";
import AravindhImage from "../assets/images/aearavindh-transparent.png";
import "./Home.css";

function Home() {
  return <div className="home">
    <img src={AravindhImage} alt="Aravindh AE" />
    <h1>Aravindh A E</h1>
    <h3>Software Engineer</h3>
  </div>;
}

export default Home;
