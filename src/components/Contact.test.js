import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component', () => {
    render(<Contact />);

    // Check if the "Contact Us" heading is present
    const heading = screen.getByText('Contact Us');
    expect(heading).toBeInTheDocument();

    // Check if form elements are rendered
    const fullNameInput = screen.getByPlaceholderText('ex. John Doe');
    const emailInput = screen.getByPlaceholderText('ex. johndoe@email.com');
    const phoneInput = screen.getByPlaceholderText('ex. 99999 88888');
    const messageTextarea = screen.getByLabelText('Message');
    const sendButton = screen.getByText('Send');

    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
});

test('form submission', () => {
    render(<Contact />);

    // Mocking a form submission
    const fullNameInput = screen.getByPlaceholderText('ex. John Doe');
    const emailInput = screen.getByPlaceholderText('ex. johndoe@email.com');
    const phoneInput = screen.getByPlaceholderText('ex. 99999 88888');
    const messageTextarea = screen.getByLabelText('Message');
    const sendButton = screen.getByText('Send');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@email.com' } });
    fireEvent.change(phoneInput, { target: { value: '99999 88888' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });

    fireEvent.click(sendButton);

    // You can add expectations for the form submission behavior here
});
