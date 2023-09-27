import React from 'react'
import testimonial_1 from '../images/testimonial_1.png';
import testimonial_2 from '../images/testimonial_2.png';
import testimonial_3 from '../images/testimonial_3.png';
import testimonialBg from '../images/testimonial_bg.png';

const Testimonials = () => {
    return (
        <section id='testimonials' className='py-3' style={{ backgroundImage: `url(${testimonialBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <h3 className="mb-4 text-center">What Our Customers<br /> Talk About Us</h3>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <button className="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </button>
                <img src={testimonial_3} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
                <img src={testimonial_1} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
                <img src={testimonial_2} className='mx-2' alt="Bootstrap Themes" loading="lazy" />
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
                <div className="card-body brand_green_transparent glass_morph rounded-2 pb-0 text-center text-lg-start">
                    <figure>
                        <blockquote>
                            <q>
                                Little Lemon exceeded my expectations in every way! From the exquisite Mediterranean flavors to the warm and inviting atmosphere, dining here was an absolute delight. I highly recommend their Pizza-Style Bolognese Pasta - a true masterpiece. The staff's attention to detail and top-notch service made the experience even more memorable. Little Lemon is now my go-to spot for creating special memories!
                            </q>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 fw-bold" id='reservation'>
                            <cite title="Source Title">Kathryn Murphy</cite> - Loyal Customer
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Testimonials