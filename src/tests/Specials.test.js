import React from 'react';
import { render, screen } from '@testing-library/react';
import Specials from '../components/Specials';

test('renders Specials component', () => {
  render(<Specials />);

  // Check if the "This Week Specials" heading is present
  expect(screen.getByText('This Week Specials')).toBeInTheDocument();

  // Check if the "View Full Menu" button is present
  expect(screen.getByText('View Full Menu')).toBeInTheDocument();
});
