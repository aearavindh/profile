import { Article, Email, LocationCity } from "@mui/icons-material";
import React from "react";
import AravindhImage from "../assets/images/aearavindh-transparent.png";
import AravindhResume from "../assets/files/Aravindh_AE.pdf";
import Info from "../components/Info";
import Skills from "../components/Skills";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <img src={AravindhImage} alt="Aravindh AE" />
        <h2>Aravindh A E</h2>
        <Skills />
      </div>
      <div className="home__right">
        <Info Icon={Email} info="aearavindh2@gmail.com" />
        <Info
          Icon={LocationCity}
          info="Thirparappu, Kanyakumari, Tamil Nadu, India"
        />
        <a href={AravindhResume} className="home__download" download="Aravindh_AE">
          <Article />
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
