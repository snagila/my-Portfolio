import React from "react";
import profilePic from "../assets/profiePic.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="header">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I'm <span>Sachin Nagila</span>
            </div>
            <div className="tag">Soft. Developer</div>
            <p>I love coding and teach others what I know</p>
            <div>
              <a href="../assets/profilePic.png" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="flex right">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </section>
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
