import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me "} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />

      <div className="skillsContainer">
            <SkillsSection skill={"C++"} progress={"90%"} width={"90%"} />
            <SkillsSection skill={"Data Structures"} progress={"85%"} width={"85%"} />
            <SkillsSection skill={"Algorithm"} progress={"80%"} width={"80%"} />
            <SkillsSection skill={"HTML"} progress={"75%"} width={"75%"} />
            <SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
            <SkillsSection skill={"ReactJs"} progress={"75%"} width={"51%"} />
            <SkillsSection skill={"Git & Github"} progress={"61%"} width={"51%"} />
            <SkillsSection skill={"NodeJs"} progress={"40%"} width={"40%"} />
            <SkillsSection skill={"MongoDB"} progress={"54%"} width={"54%"} />
            <SkillsSection skill={"OOPS"} progress={"81%"} width={"81%"} />
            <SkillsSection skill={"Operating System"} progress={"61%"} width={"61%"} />
            <SkillsSection skill={"DBMS"} progress={"51%"} width={"51%"} />
            <SkillsSection skill={"Networking"} progress={"11%"} width={"11%"} />
            <SkillsSection skill={"Bootstrap"} progress={"60%"} width={"60%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="services-container">
            <ServicesSection
            image={design}
            title={"DSA"}
            text={"Data Structure is a systematic way to organize data in order to use it efficiently."}
            />

            <ServicesSection
            image={intelligence}
            title={"Web Development"}
            text={"Web development refers to building, maintaining and creating websites."}
            />

            <ServicesSection
            image={gamedev}
            title={"CP"}
            text={"Competitive programming is solving well-defined problems by writing computer programs under specified limits."}
            />
      </div>
    </div>
  );
}

export default AboutPage;
