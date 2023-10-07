import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header renders without errors', () => {
    render(<Header />);

    // Check if the Little Lemon logo is present
    const logoElement = screen.getByAltText('Little Lemon logo');
    expect(logoElement).toBeInTheDocument();

    // Check if the navigation links are present
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const menuLink = screen.getByText('Menu');
    expect(menuLink).toBeInTheDocument();

    const galleryLink = screen.getByText('Gallery');
    expect(galleryLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
});
