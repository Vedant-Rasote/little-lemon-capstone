import React from 'react';
import DishCard from '../components/DishCard';

const Specials = () => {
    const specials = [
        {
            "imageSource": require('../images/pizza_style_bolognese_pasta.png'),
            "imageAltText": "Pizza-Style Bolognese Pasta",
            "title": "Pizza-Style Bolognese Pasta",
            "description": "Bolognese sauce, Italian spices, and pasta, topped with melted cheese.",
            "price": "$29.99",
            "starRating": 5,
            "reviewsCount": 783
        },
        {
            "imageSource": require('../images/three_color_rotini_pasta.png'),
            "imageAltText": "Three-Color Rotini Pasta",
            "title": "Three-Color Rotini Pasta",
            "description": "Medley of tomatoes, fresh parsley, vibrant greens, and black olives.",
            "price": "$26.50",
            "starRating": 5,
            "reviewsCount": 783
        },
        {
            "imageSource": require('../images/shrimp_veggie_noodles.png'),
            "imageAltText": "Shrimp and Veggie Noodles",
            "title": "Shrimp and Veggie Noodles",
            "description": "Succulent shrimp, crisp vegetables, and tender noodles in a savory sauce.",
            "price": "$28.99",
            "starRating": 5,
            "reviewsCount": 783
        },
        {
            "imageSource": require('../images/salmon_vegetables_salad.png'),
            "imageAltText": "Salmon Veggie Salad",
            "title": "Salmon Veggie Salad",
            "description": "Grilled salmon on fresh veggies with zesty vinaigrette and olive oil.",
            "price": "$18.99",
            "starRating": 5,
            "reviewsCount": 783
        }
    ];

    return (
        <section>
            <div className="row mb-3">
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className="fw-bold text-body-emphasis lh-1 mb-3" aria-label="This Week Specials">
                        This Week Specials
                    </h3>
                    <div className='mb-3'>
                        <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button" aria-label="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" aria-hidden="true">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </button>
                        <button className="btn btn-dark rounded-circle p-3 lh-1 mx-1" type="button" aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" aria-hidden="true">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {specials.map((dish, index) => (
                    <div key={index} className="col-md-3 col-sm-6">
                        <DishCard
                            imageSource={dish.imageSource}
                            imageAltText={dish.imageAltText}
                            title={dish.title}
                            description={dish.description}
                            price={dish.price}
                            starRating={dish.starRating}
                            reviewsCount={dish.reviewsCount}
                            data-testid={`dish-card-${index}`}
                        />
                    </div>
                ))}
            </div>

            <button className="btn btn-dark rounded-pill d-block mx-auto mb-4" type="button" id='menu' aria-label="View Full Menu">
                View Full Menu
            </button>
        </section>
    );
}

export default Specials;
