import React from 'react';
import { Container } from 'react-bootstrap';
import heroImage from "./images/hero_image.png"
import about_us_image from "./images/about_us_image.png"
import gal_img_1 from "./images/gal_img_1.jpg"
import gal_img_2 from "./images/gal_img_2.jpg"
import gal_img_3 from "./images/gal_img_3.jpg"
import gal_img_4 from "./images/gal_img_4.jpg"
import shrimp_veggie_noodles from './images/shrimp_veggie_noodles.png'
import pizza_style_bolognese_pasta from './images/pizza_style_bolognese_pasta.png'
import salmon_vegetables_salad from './images/salmon_vegetables_salad.png'
import three_color_rotini_pasta from './images/three_color_rotini_pasta.png'
import testimonial_1 from './images/testimonial_1.png'
import testimonial_2 from './images/testimonial_2.png'
import testimonial_3 from './images/testimonial_3.png'
import testimonial_4 from './images/testimonial_4.png'
import testimonial_5 from './images/testimonial_5.png'
import testimonial_6 from './images/testimonial_6.png'
import testimonial_7 from './images/testimonial_7.png'
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <Container className='karla'>
    <Header />
    <main className=''>
      <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src={heroImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Little Lemon</h1>
          <h3 class="fw-medium text-body-emphasis lh-1 mb-3">Chicago</h3>
          <p class="lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-warning rounded-pill px-3">Order Online</button>
            <button type="button" class="btn btn-dark rounded-pill px-3" >Reserve Table</button>
          </div>
        </div>
      </div>

      {/* Curve */}
      <svg className='full-width ' id='' viewBox="0 0 1440 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.26829C315.486 263.797 1161.63 -122.985 1440 44.8544" stroke="black" />
      </svg>

      <div class="row flex-lg-row-reverse align-items-center g-5 pb-5 negative-margin">
        <div class="col-10 col-sm-8 col-lg-6">
          <h1 class="fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
          <p class="lead">We are a family-owned Mediterranean restaurant located in Chicago, Illinois. Our restaurant is known for its focus on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish cultures to create a unique fusion of flavors.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-warning rounded-pill px-3">More Details ↝</button>
          </div>
        </div>
        <div class="col-lg-6">
          <img src={about_us_image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
        </div>
      </div>
      <div class="row mb-3">
        <div className='d-flex justify-content-between align-items-center'>
          <h3 class="fw-bold text-body-emphasis lh-1 mb-3">Food Gallery</h3>
          <div className='mb-3'>
            <button class="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            <button class="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="col-md-3 col-sm-6"><img src={gal_img_1} class="img-thumbnail" alt="gal_img_1" /></div>
        <div class="col-md-3 col-sm-6"><img src={gal_img_2} class="img-thumbnail" alt="gal_img_2" /></div>
        <div class="col-md-3 col-sm-6"><img src={gal_img_3} class="img-thumbnail" alt="gal_img_3" /></div>
        <div class="col-md-3 col-sm-6"><img src={gal_img_4} class="img-thumbnail" alt="gal_img_4" /></div>
      </div>
      <button class="btn btn-dark rounded-pill d-block mx-auto" type="button">View More</button>

      <div class="row mb-3">
        <div className='d-flex justify-content-between align-items-center'>
          <h3 class="fw-bold text-body-emphasis lh-1 mb-3">This Week Specials</h3>
          <div className='mb-3'>
            <button class="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            <button class="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="card border-0 bg-transparent">
            <img src={pizza_style_bolognese_pasta} class="card-img-top" alt='' />
            <div class="card-body text-center">
              <h5 class="card-title">Pizza-Style Bolognese Pasta</h5>
              <p class="card-text">A fusion of Bolognese sauce, Italian spices, and pasta, topped with melted cheese.</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Price: <span className='fw-medium'> $29.99</span></p>
                <span className='mb-3'>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </button>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </span>
              (783 Ratings)
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="card border-0 bg-transparent">
            <img src={three_color_rotini_pasta} class="card-img-top" alt='' />
            <div class="card-body text-center">
              <h5 class="card-title">Three-Color Rotini Pasta</h5>
              <p class="card-text">A Mediterranean delight with black mushrooms, tomatoes, spices, and creamy avocados.</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Price: <span className='fw-medium'> $26.50</span></p>
                <span className='mb-3'>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </button>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </span>
              (783 Ratings)
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="card border-0 bg-transparent">
            <img src={shrimp_veggie_noodles} class="card-img-top" alt='' />
            <div class="card-body text-center">
              <h5 class="card-title">Shrimp and Veggie Noodles</h5>
              <p class="card-text">Succulent shrimp, crisp vegetables, and tender noodles in a savory sauce.</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Price: <span className='fw-medium'> $28.99</span></p>
                <span className='mb-3'>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </button>
                  <button class="btn btn-dark border rounded-circle p-3 lh-1 mx-1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </span>
              (783 Ratings)
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="card border-0 bg-transparent">
            <img src={salmon_vegetables_salad} class="card-img-top" alt='' />
            <div class="card-body text-center">
              <h5 class="card-title">Salmon Veggie Salad</h5>
              <p class="card-text">Grilled salmon on fresh veggies with zesty vinaigrette and olive oil.</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Price: <span className='fw-medium'> $18.99</span></p>
                <span className='mb-1'>
                  <button class="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </button>
                  <button class="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </span>
              (783 Ratings)
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-dark rounded-pill d-block mx-auto mb-4" type="button">View Full Menu</button>

      <section>
        <h3 class="mb-4 text-center">What Our Happy Customer<br /> Talk About Us</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <button class="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          </button>
          <img src={testimonial_7} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_6} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_5} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_1} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_2} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_3} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <img src={testimonial_4} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
          <button class="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div class="card mx-auto w-50 border-0 bg-transparent">
          <div class="card-body brand_green_transparent rounded-2 pb-0">
            <figure>
              <blockquote>
                <q>
                  Little Lemon exceeded my expectations in every way! From the exquisite Mediterranean flavors to the warm and inviting atmosphere, dining here was an absolute delight. I highly recommend their Pizza-Style Bolognese Pasta - a true masterpiece. The staff's attention to detail and top-notch service made the experience even more memorable. Little Lemon is now my go-to spot for creating special memories!
                </q>
              </blockquote>
              <figcaption class="blockquote-footer mb-0 fw-bold">
                <cite title="Source Title">Kathryn Murphy</cite> - Loyal Customer
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className='w-50 mx-auto border-top border-bottom my-3'>
        <h3 class="my-4 text-center">Reserve a Table</h3>
        <p className='text-center'>To help us find the best table for you, select the preferred <br />party size, date and time of your reservation.</p>
        <form class="row g-3">
          <div class="col-md-4">
            <label for="party_size" class="form-label">Party Size</label>
            <input type="number" class="form-control" id="party_size" />
          </div>
          <div class="col-md-4">
            <label for="date" class="form-label">Date</label>
            <input type="date" class="form-control" id="time" />
          </div>
          <div class="col-md-4">
            <label for="time" class="form-label">Time</label>
            <input type="time" class="form-control" id="time" />
          </div>
          <div class="col-12 text-center">
            <button type="button" class="btn btn-dark rounded-pill mb-3" >Find a Table</button>
          </div>
        </form>
      </section>

      <section className='' id='contact'>
        <div class="row mb-3">
          <div class="col-sm-6">
            <h3>We would love to hear from you</h3>
            <p>Drop us a line and we'll get back to you</p>
            <form class="row g-3">
              <div class="col-12">
                <label for="full_name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="full_name" placeholder="ex. John Doe" />
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="ex. johndoe@email.com" />
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" id="phone" placeholder="ex. 99999 88888" required />
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <div class="col-12 text-center">
                <button type="button" class="btn btn-dark rounded-pill" >Send</button>
              </div>
            </form>
          </div>
          <div class="col-sm-6">
            <iframe
              width="100%"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
            </iframe>
          </div>
        </div>
      </section>
    </main>
    <hr />
    <Footer />
  </Container>
);

export default App;