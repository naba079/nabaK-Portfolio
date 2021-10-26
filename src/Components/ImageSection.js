import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Naba Kumar Sit</span>
        </h4>
        <p className="about-text">
          Student at Jadavpur University || Good Understanding in Data Structures & Algorithm
          || 5* in C++ ||
          Gfg-UniversityRank : 60, TOP-5% || Competitive Programmer at Codechef
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>University</p>
            <p>Department</p>
            <p>Cgpa</p>
            <p>Gender</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Naba Kumar Sit</p>
            <p>: Jadavpur University</p>
            <p>: Electronics & Tele-Communication Engg.</p>
            <p>: 8.13</p>
            <p>: Male</p>
            <p>: India</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1YTSHI0CNZjKCTxzGL8iX_p2QF5hW_aMl/view?usp=sharing">
          <button className="btn">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
