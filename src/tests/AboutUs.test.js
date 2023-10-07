import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from '../components/AboutUs';

test('renders AboutUs component without errors', () => {
  const { getByText } = render(<AboutUs />);
  const viewMoreButton = getByText('View More Details');
  expect(viewMoreButton).toBeInTheDocument();
});
