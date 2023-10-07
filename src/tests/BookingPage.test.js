import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingPage from "../components/BookingPage";

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
  fireEvent.click(getByText("Find a Table"));

  // Step 2: Your Details
  expect(getByLabelText("First Name")).toBeInTheDocument();
  expect(getByLabelText("Last Name")).toBeInTheDocument();
  expect(getByLabelText("Phone")).toBeInTheDocument();
  expect(getByLabelText("Email")).toBeInTheDocument();
  expect(getByLabelText("Special Requirements")).toBeInTheDocument();
  fireEvent.click(getByText("Submit"));

  // Step 3: Credit Card Details
  expect(getByLabelText("Cardholder Name")).toBeInTheDocument();
  expect(getByLabelText("Card Number")).toBeInTheDocument();
  expect(getByLabelText("Expiry Date")).toBeInTheDocument();
  expect(getByLabelText("CVC")).toBeInTheDocument();
  fireEvent.click(getByText("Submit Credit Card Details"));

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
