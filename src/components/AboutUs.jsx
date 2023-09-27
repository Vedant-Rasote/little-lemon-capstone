import React from "react";
import bgHeroText from "../images/bg_hero_text.png";
import about_us_image from "../images/about_us_image_silhouette.png";

const AboutUs = () => {
  return (
    <div className="row align-items-center g-5 py-5 negative-margin" id="about">
      <div className="col-10 col-sm-8 col-lg-6 mx-auto">
        <img
          src={about_us_image}
          className="d-block img-fluid"
          alt="Bootstrap Themes"
          loading="lazy"
        />
      </div>
      <div
        className="col-lg-6 text-center text-lg-start"
        style={{
          backgroundImage: `url(${bgHeroText})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
        <p className="lead">
          We are a family-owned Mediterranean restaurant located in Chicago,
          Illinois. Our restaurant is known for its focus on traditional recipes
          served with a modern twist. The chefs draw inspiration from Italian,
          Greek, and Turkish cultures to create a unique fusion of flavors.
        </p>
        <button type="button" className="btn btn-warning rounded-pill px-3">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
