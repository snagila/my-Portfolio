import React from "react";
import profilePic from "../assets/profiePic.png";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span> About Me </span>
      </h2>

      <div className="container flex about-content">
        <div className="flex myImg">
          <img src={profilePic} width="100%" alt="" />
        </div>
        <div className="my-bio container">
          <h2>Sachin Nagila</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            ipsum magnam ipsam animi quas libero consequuntur veritatis quisquam
            nobis adipisci, eligendi veniam! Molestiae eum non quidem ullam,
            rerum corrupti a!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            consequuntur dolores ut inventore odit aliquam magni quaerat
            blanditiis corrupti earum vitae quas, quos ducimus eum, cumque eaque
            accusamus non facilis!
          </p>
          <p>Sydney, Australia</p>

          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>coding</span>
              <span>Footbal</span>
              <span>Super Hero Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
