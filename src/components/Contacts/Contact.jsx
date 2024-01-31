import React from "react";
import Hero from "../Hero";

const description1 = `Noulamer's Story: Sea,`;
const description2 = `Savoir-faire, and Sustainability`;
const button = { title: `Explore Now`, url: `/about` };
const heroImage = `/contact.png`;

const Contact = () => {
  return (
    <Hero
      description1={description1}
      description2={description2}
      button={button}
      heroImage={heroImage}
    />
  );
};

export default Contact;
