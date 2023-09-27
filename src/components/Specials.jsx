import React from 'react'
import shrimp_veggie_noodles from '../images/shrimp_veggie_noodles.png';
import pizza_style_bolognese_pasta from '../images/pizza_style_bolognese_pasta.png';
import salmon_vegetables_salad from '../images/salmon_vegetables_salad.png';
import three_color_rotini_pasta from '../images/three_color_rotini_pasta.png';
import DishCard from '../components/DishCard';

const Specials = () => {
    return (
        <section>
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
        </section>
    )
}

export default Specials