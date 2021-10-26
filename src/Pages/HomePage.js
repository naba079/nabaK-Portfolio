import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Naba Kumar Sit</span>
        </h1>
        <p className="p-sub-text">
          An Undergraduate student having a good knowledge of Data Structures
          and Algorithm along with programming language C++ . Web Development is
          also owns my interest. As a clean learner, I love to learn new
          technologies.
        </p>
        <div className="icons">
          {/* <a href="https://www.facebook.com/nabakumar.sit.31" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" href='https://www.facebook.com/' />
          </a> */}
          <a href="https://www.linkedin.com/in/naba-profile-me/" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
          <a href="https://github.com/naba079" className="icon-holder">
              <FontAwesomeIcon icon={faGithub} className="icon git" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
