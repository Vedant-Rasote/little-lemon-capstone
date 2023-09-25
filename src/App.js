import React from 'react';
import { Container } from 'react-bootstrap';
import heroWithSilhouette from "./images/hero_with_silhouette.png"
import bgHeroText from "./images/bg_hero_text.png"
import about_us_image from "./images/about_us_image_silhouette.png"
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
import DishCard from './DishCard'

const App = () => (
  <Container className='karla'>
    <Header />
    <main className='mt-5'>
      <div className="row flex-lg-row-reverse align-items-center g-5 pt-5" id='home'>
        <div className="col-10 col-sm-8 col-lg-6 mx-auto" >
          <img src={heroWithSilhouette} className="d-block img-fluid" alt="Bootstrap Themes" loading="lazy" />
        </div>
        <div className="col-lg-6 text-center text-lg-start" style={{ backgroundImage: `url(${bgHeroText})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Little Lemon</h1>
          <h3 className="fw-medium text-body-emphasis lh-1 mb-3">Chicago</h3>
          <p className="lead">Discover our family-owned Mediterranean eatery, where we harmonize tradition with modernity, crafting delectable dishes to delight your palate.</p>
          <button type="button" className="btn btn-warning rounded-pill px-3 mr-2">Order Online</button>
          <button type="button" className="btn btn-dark rounded-pill px-3 mx-2">Reserve Table</button>
        </div>
      </div>

      {/* Curve */}
      <svg className='full-width d-none d-lg-inline' viewBox="0 0 1440 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.26829C315.486 263.797 1161.63 -122.985 1440 44.8544" stroke="black" />
      </svg>

      <div className="row align-items-center g-5 py-5 negative-margin" id='about'>
        <div className="col-10 col-sm-8 col-lg-6 mx-auto" >
          <img src={about_us_image} className="d-block img-fluid" alt="Bootstrap Themes" loading="lazy" />
        </div>
        <div className="col-lg-6 text-center text-lg-start" style={{ backgroundImage: `url(${bgHeroText})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <h1 className="fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
          <p className="lead">We are a family-owned Mediterranean restaurant located in Chicago, Illinois. Our restaurant is known for its focus on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish cultures to create a unique fusion of flavors.</p>
          <button type="button" className="btn btn-warning rounded-pill px-3">More Details ↝</button>
        </div>
      </div>

      <div className="row mb-3" id='gallery'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className="fw-bold text-body-emphasis lh-1 mb-3">Food Gallery</h3>
          <div className='mb-3'>
            <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6"><img src={gal_img_1} className="img-thumbnail" alt="gal_img_1" /></div>
        <div className="col-md-3 col-sm-6"><img src={gal_img_2} className="img-thumbnail" alt="gal_img_2" /></div>
        <div className="col-md-3 col-sm-6"><img src={gal_img_3} className="img-thumbnail" alt="gal_img_3" /></div>
        <div className="col-md-3 col-sm-6"><img src={gal_img_4} className="img-thumbnail" alt="gal_img_4" /></div>
      </div>
      <button className="btn btn-dark rounded-pill d-block mx-auto" type="button">View More</button>

      <div className="row mb-3">
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className="fw-bold text-body-emphasis lh-1 mb-3">This Week Specials</h3>
          <div className='mb-3'>
            <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <DishCard
            imageSource={pizza_style_bolognese_pasta}
            imageAltText='Image of Pizza-Style Bolognese Pasta'
            title='Pizza-Style Bolognese Pasta'
            description='Bolognese sauce, Italian spices, and pasta, topped with melted cheese.'
            price='$29.99'
            starRating={5}
            reviewsCount={783}
          />
        </div>

        <div className="col-md-3 col-sm-6">
          <DishCard
            imageSource={three_color_rotini_pasta}
            imageAltText='Image of Three-Color Rotini Pasta'
            title='Three-Color Rotini Pasta'
            description='Medley of tomatoes, fresh parsley, vibrant greens, and black olives.'
            price='$26.50'
            starRating={5}
            reviewsCount={783}
          />
        </div>

        <div className="col-md-3 col-sm-6">
          <DishCard
            imageSource={shrimp_veggie_noodles}
            imageAltText='Image of Shrimp and Veggie Noodles'
            title='Shrimp and Veggie Noodles'
            description='Succulent shrimp, crisp vegetables, and tender noodles in a savory sauce.'
            price='$28.99'
            starRating={5}
            reviewsCount={783}
          />
        </div>

        <div className="col-md-3 col-sm-6">
          <DishCard
            imageSource={salmon_vegetables_salad}
            imageAltText='Image of SalmonVeggie Salad'
            title='Salmon Veggie Salad'
            description='Grilled salmon on fresh veggies with zesty vinaigrette and olive oil.'
            price='$18.99'
            starRating={5}
            reviewsCount={783}
          />
        </div>

      </div>
      <button className="btn btn-dark rounded-pill d-block mx-auto mb-4" type="button" id='menu'>View Full Menu</button>

      <section id='testimonials'>
        <h3 className="mb-4 text-center">What Our Happy Customer<br /> Talk About Us</h3>
        <div className='d-flex justify-content-center align-items-center flex-wrap'>
          <button className="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
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
          <button className="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>
        <div className='text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div className="card w-75 mx-auto border-0 bg-transparent">
          <div className="card-body brand_green_transparent rounded-2 pb-0 text-center text-lg-start">
            <figure>
              <blockquote>
                <q>
                  Little Lemon exceeded my expectations in every way! From the exquisite Mediterranean flavors to the warm and inviting atmosphere, dining here was an absolute delight. I highly recommend their Pizza-Style Bolognese Pasta - a true masterpiece. The staff's attention to detail and top-notch service made the experience even more memorable. Little Lemon is now my go-to spot for creating special memories!
                </q>
              </blockquote>
              <figcaption className="blockquote-footer mb-0 fw-bold">
                <cite title="Source Title">Kathryn Murphy</cite> - Loyal Customer
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className='mx-auto background-light my-3' id='reservation'>
        <h3 className="my-4 text-center">Reserve a Table</h3>
        <p className='text-center'>To help us find the best table for you, select the preferred party size, date and time of your reservation.</p>
        <form className="row g-3">
          <div className="col-md-4">
            <label for="party_size" className="form-label">Party Size</label>
            <input type="number" className="form-control" id="party_size" />
          </div>
          <div className="col-md-4">
            <label for="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="time" />
          </div>
          <div className="col-md-4">
            <label for="time" className="form-label">Time</label>
            <input type="time" className="form-control" id="time" />
          </div>
          <div className="col-12 text-center">
            <button type="button" className="btn btn-dark rounded-pill mb-3" >Find a Table</button>
          </div>
        </form>
      </section>

      <section id='contact'>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h3>We would love to hear from you</h3>
            <p>Drop us a line and we'll get back to you</p>
            <form className="row g-3">
              <div className="col-12">
                <label for="full_name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="full_name" placeholder="ex. John Doe" />
              </div>
              <div className="col-md-6">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="ex. johndoe@email.com" />
              </div>
              <div className="col-md-6">
                <label for="phone" className="form-label">Phone</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="phone" placeholder="ex. 99999 88888" required />
              </div>
              <div className="col-12">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="button" className="btn btn-dark rounded-pill" >Send</button>
              </div>
            </form>
          </div>
          <div className="col-sm-6 mb-3">
            <iframe
              width="100%"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"
              title="Google Maps - Space Needle, Seattle WA"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
    <hr />
    <Footer />
  </Container>
);

export default App;