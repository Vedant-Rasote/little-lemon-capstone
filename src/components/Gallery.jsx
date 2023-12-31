import React from "react";
import galImg1 from "../images/gal_img_1.jpg";
import galImg2 from "../images/gal_img_2.jpg";
import galImg3 from "../images/gal_img_3.jpg";
import galImg4 from "../images/gal_img_4.jpg";

const Gallery = () => {
  return (
    <>
      <div className="row mb-3" id="gallery">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold text-body-emphasis lh-1 mb-3" aria-label="Food Gallery">
            Food Gallery
          </h3>
          <div className="mb-3">
            <button
              className="btn btn-dark rounded-circle p-3 lh-1 mx-1"
              type="button"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
            <button
              className="btn btn-dark rounded-circle p-3 lh-1 mx-1"
              type="button"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={galImg1} className="img-thumbnail" alt="Food Item 1" aria-label="Food Item 1" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={galImg2} className="img-thumbnail" alt="Food Item 2" aria-label="Food Item 2" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={galImg3} className="img-thumbnail" alt="Food Item 3" aria-label="Food Item 3" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={galImg4} className="img-thumbnail" alt="Food Item 4" aria-label="Food Item 4" />
        </div>
      </div>
      <button
        className="btn btn-dark rounded-pill d-block mx-auto"
        id="specials"
        type="button"
        aria-label="View More Images"
      >
        View More
      </button>
    </>
  );
};

export default Gallery;
