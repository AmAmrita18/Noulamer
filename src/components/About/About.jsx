import React from "react";
import Hero from "../Hero";
import Heritage from "./Heritage";
import SustainablePractice from "./SustainablePractice";
import CtaAbout from "./CtaAbout";
import GetInTouch from "../Home/GetInTouch";
import Connect from "../Home/Connect";

const description1 = `Noulamer's Story: Sea,`;
const description2 = `Savoir-faire, and Sustainability`;
const button = { title: `Explore Now`, url: `/about` };
const heroImage = `/heroAbout.png`;

const About = () => {
  return (
    <div className="w-full">
      <Hero
        description1={description1}
        description2={description2}
        button={button}
        heroImage={heroImage}
      />
      <Heritage />
      <SustainablePractice />
      <CtaAbout />
      <GetInTouch />
      <Connect />
    </div>
  );
};

export default About;
