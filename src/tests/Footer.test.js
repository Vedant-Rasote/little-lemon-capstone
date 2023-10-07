import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component with links', () => {
    render(<Footer />);

    // Check if the navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservation')).toBeInTheDocument();
    expect(screen.getByText('Order online')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check if the contact information is present
    expect(screen.getByText('Call: 123 456 6780')).toBeInTheDocument();
    expect(screen.getByText('Email: info@mysite.com')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Lemon GroveChicago, IL 60601')).toBeInTheDocument();

    // Check if the opening hours are present
    expect(screen.getByText('Mon - Fri: 11am - 10pm')).toBeInTheDocument();
    expect(screen.getByText('Sat - Sun: 11am - 12am')).toBeInTheDocument();

    // Check if the social media icons are present
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
});

test('renders Footer component with copyright text', () => {
    render(<Footer />);

    // Check if the copyright text is present
    expect(screen.getByText('© 2023 Copyright: littlelemon.com')).toBeInTheDocument();
});
