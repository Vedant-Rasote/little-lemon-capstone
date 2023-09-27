import React from 'react'
import Card from 'react-bootstrap/Card';
import { StarFill, Star } from "react-bootstrap-icons";

const DishCard = (props) => {
    let { imageSource, imageAltText, title, description, price, starRating, reviewsCount } = props;
    const filledStars = Array.from({ length: starRating }, (_, index) => (
        <StarFill className='me-1' key={index} />
    ));
    const emptyStars = Array.from({ length: 5 - starRating }, (_, index) => (
        <Star className='me-1' key={index} />
    ));
    return (
        <Card className='bg-transparent border-0'>
            <img src={imageSource} className="card-img-top border border-secondary rounded-circle image_shadow" alt={imageAltText} />
            <Card.Body className='text-center'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="m-0">Price: <span className="fw-medium">{price}</span></Card.Text>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill text-danger" viewBox="0 0 16 14">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                        <button className="btn btn-dark rounded-circle p-2 lh-1 mx-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 18">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center bg-transparent'>
                <span>
                    {filledStars}
                    {emptyStars}
                </span>
                ({reviewsCount} reviews)
            </Card.Footer>
        </Card>
    )
}

export default DishCard