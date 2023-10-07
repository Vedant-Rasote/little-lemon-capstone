import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home component with all sections', () => {
    render(<Home />);

    // Check if all the sections are present in the Home component
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('curve-divider-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-us-section')).toBeInTheDocument();
    expect(screen.getByTestId('gallery-section')).toBeInTheDocument();
    expect(screen.getByTestId('specials-section')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
    expect(screen.getByTestId('booking-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
});
