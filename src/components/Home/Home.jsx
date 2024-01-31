import React from "react";
import Hero from "../Hero";
import Story from "./Story";
import Pledge from "./Pledge";
import Process from "./Process";
import Traditions from "./Traditions";
import Cta from "./Cta";
import GetInTouch from "./GetInTouch";
import Connect from "./Connect";

const description1 = `Experience Ocean Freshness,`;
const description2 = `Handpicked by Noulamer`;
const button = { title: `Explore Now`, url: `#` };
const heroImage = `/hero.png`;
const Home = () => {
  return (
    <div className="w-full">
      <Hero
        description1={description1}
        description2={description2}
        button={button}
        heroImage={heroImage}
      />
      <Story />
      <Pledge />
      <Process />
      <Traditions />
      <Cta />
      <GetInTouch />
      <Connect />
    </div>
  );
};

export default Home;
