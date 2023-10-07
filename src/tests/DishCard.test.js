import React from 'react';
import { render, screen } from '@testing-library/react';
import DishCard from '../components/DishCard';

test('renders DishCard component', () => {
    render(
        <DishCard
            imageSource="/path/to/image.jpg"
            imageAltText="Dish Image"
            title="Delicious Dish"
            description="A description of the dish."
            price="$10.99"
            starRating={4}
            reviewsCount={15}
        />
    );

    // Check if the title and description are present
    expect(screen.getByText('Delicious Dish')).toBeInTheDocument();
    expect(screen.getByText('A description of the dish.')).toBeInTheDocument();
});
