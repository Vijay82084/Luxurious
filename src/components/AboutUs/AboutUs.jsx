import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>With meticulous attention to detail, we've crafted an environment where relaxation and serenity reign supreme. From the moment you arrive, our dedicated team is poised to anticipate and fulfill your every need. Whether you seek quiet moments of reflection or exciting adventures facilis.</p>
          <p>With meticulous attention to detail, we've crafted an environment where relaxation and serenity reign supreme. From the moment you arrive, our dedicated team is poised to anticipate and fulfill your every need. Whether you seek quiet moments of reflection or exciting adventures</p>
          <p>With meticulous attention to detail, we've crafted an environment where relaxation and serenity reign supreme. From the moment you arrive, our dedicated team is poised to anticipate and fulfill your every need. Whether you seek quiet moments of reflection or exciting adventures</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
