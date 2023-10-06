import React from 'react'
import heroWithSilhouette from "../images/hero_with_silhouette.png";
import bgHeroText from "../images/bg_hero_text.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5" id='home'>
            <div className="col-10 col-sm-8 col-lg-6 mx-auto" >
                <img src={heroWithSilhouette} className="d-block img-fluid" alt="Bootstrap Themes" loading="lazy" />
            </div>
            <div className="col-lg-6 text-center text-lg-start" style={{ backgroundImage: `url(${bgHeroText})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Little Lemon</h1>
                <h3 className="fw-medium text-body-emphasis lh-1 mb-3">Chicago</h3>
                <p className="lead">Discover our family-owned Mediterranean eatery, where we harmonize tradition with modernity, crafting delectable dishes to delight your palate.</p>
                <button type="button" className="btn btn-warning rounded-pill px-3 mr-2">Order Online</button>
                <Link to='/booking'><button type="button" className="btn btn-dark rounded-pill px-3 mx-2">Reserve Table</button></Link>
            </div>
        </div>
    )
}

export default Hero