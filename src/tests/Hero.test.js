import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Hero from '../components/Hero';

test('renders Hero component with buttons', () => {
    const { getByText } = render(
        <Router>
            <Hero />
        </Router>
    );

    // Check if the text "Little Lemon" is present
    const titleElement = getByText(/Little Lemon/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the "Order Online" button is present
    const orderButton = getByText(/Order Online/i);
    expect(orderButton).toBeInTheDocument();

    // Check if the "Reserve Table" button is present and has a link to '/booking'
    const reserveButton = getByText(/Reserve Table/i);
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton.closest('a')).toHaveAttribute('href', '/booking');
});
