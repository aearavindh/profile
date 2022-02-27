import { Email, LocationCity } from "@mui/icons-material";
import React from "react";
import AravindhImage from "../assets/images/aearavindh-transparent.png";
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
      </div>
    </div>
  );
}

export default Home;
