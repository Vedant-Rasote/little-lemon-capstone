import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("renders BookingPage component without errors", () => {
  const { getByText, getByLabelText, getByPlaceholderText, queryByText } = render(
    <BookingPage />
  );

  // Step 1: Reservation Details
  expect(getByText("Reservation Details")).toBeInTheDocument();
  expect(getByLabelText("Date")).toBeInTheDocument();
  expect(getByLabelText("Time")).toBeInTheDocument();
  expect(getByLabelText("Party Size")).toBeInTheDocument();
  expect(getByLabelText("Occasion")).toBeInTheDocument();
  expect(getByPlaceholderText("Enter your first name")).toBeInTheDocument();

  // Move to Step 2: Your Details
  fireEvent.click(getByText("Your Details"));

  // Step 2: Your Details
  expect(
    getByText("Please provide your personal details.")
  ).toBeInTheDocument();
  expect(getByLabelText("First Name")).toBeInTheDocument();
  expect(getByLabelText("Last Name")).toBeInTheDocument();
  expect(getByLabelText("Phone")).toBeInTheDocument();
  expect(getByLabelText("Email")).toBeInTheDocument();
  expect(getByLabelText("Special Requirements")).toBeInTheDocument();

  // Move to Step 3: Credit Card Details
  fireEvent.click(getByText("Credit Card Details"));

  // Step 3: Credit Card Details
  expect(
    getByText("Credit card details are required to secure your booking.")
  ).toBeInTheDocument();
  expect(getByLabelText("Cardholder Name")).toBeInTheDocument();
  expect(getByLabelText("Card Number")).toBeInTheDocument();
  expect(getByLabelText("Expiry Date")).toBeInTheDocument();
  expect(getByLabelText("CVC")).toBeInTheDocument();

  // Move to Step 4: Summary
  fireEvent.click(getByText("Summary"));

  // Step 4: Summary
  expect(
    getByText(
      "Please confirm your booking details are correct before proceeding so that we can hold your table."
    )
  ).toBeInTheDocument();

  // Move to Step 5: Confirmation
  fireEvent.click(getByText("Confirm Reservation"));

  // Step 5: Confirmation
  expect(getByText("Reservation Confirmed!")).toBeInTheDocument();
  expect(getByText("Go back to home")).toBeInTheDocument();

  // Check if the form is no longer visible
  expect(queryByText("Reservation Details")).not.toBeInTheDocument();
  expect(queryByText("Your Details")).not.toBeInTheDocument();
  expect(queryByText("Credit Card Details")).not.toBeInTheDocument();
  expect(queryByText("Summary")).not.toBeInTheDocument();
});
