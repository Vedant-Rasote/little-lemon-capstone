import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';

// Custom function to match text flexibly
const findText = (pattern) => {
  return screen.getByText((content, node) => {
    const hasText = (text) => new RegExp(pattern, 'i').test(text);
    const nodeText = node.textContent;
    return hasText(nodeText);
  });
};

test('renders Testimonials component', () => {
  render(<Testimonials />);

  // Check if the "What Our Customers Talk About Us" heading is present
  expect(screen.getByText('What Our Customers Talk About Us')).toBeInTheDocument();

  // Check if the left and right arrow buttons are present
  expect(screen.getByTestId('left-arrow-button')).toBeInTheDocument();
  expect(screen.getByTestId('right-arrow-button')).toBeInTheDocument();

  // Check if the images are present
  const testimonialImages = screen.getAllByAltText('Bootstrap Themes');
  expect(testimonialImages.length).toBe(3);

  // Check if the caret-down icon is present
  expect(screen.getByTestId('caret-down-icon')).toBeInTheDocument();
});
