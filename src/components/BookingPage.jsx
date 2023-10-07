import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    partySize: "",
    date: "",
    time: "",
    occasion: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    specialRequirements: "",
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    acceptTerms: false,
  });

  const reservationInitialValues = {
    partySize: "",
    date: "",
    time: "",
    occasion: "",
  };

  const availableTimes = [
    "17:00",
    "17:30",
    "18:30",
    "20:00",
    "20:30",
    "21:00",
    "22:00",
    "23:30",
  ];

  const reservationValidationSchema = Yup.object({
    partySize: Yup.number()
      .required("Please enter the number of Guests!")
      .min(2, "Party size must be at least 2")
      .max(10, "Party size cannot exceed 10"),
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date must be in the future"),
    time: Yup.string()
      .required("Time is required")
      .oneOf(availableTimes, "Please select a valid time"),
    occasion: Yup.string(),
  });

  const reservationOnSubmit = (values) => {
    console.log(values);
    setStep(2);

    let data = {
      ...details,
      ...values,
    };

    setDetails(data);
  };

  const reservationFormik = useFormik({
    initialValues: reservationInitialValues,
    validationSchema: reservationValidationSchema,
    onSubmit: reservationOnSubmit,
  });

  const personalDetailsInitialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    specialRequirements: "",
  };

  const personalDetailsValidationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
        "Invalid Phone number"
      )
      .required("Phone is required")
      .min(10, "too short")
      .max(10, "too long"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    specialRequirements: Yup.string(),
  });

  const personalDetailsOnSubmit = (values) => {
    console.log(values);
    setStep(3);

    let data = {
      ...details,
      ...values,
    };

    setDetails(data);
  };

  const personalDetailsFormik = useFormik({
    initialValues: personalDetailsInitialValues,
    validationSchema: personalDetailsValidationSchema,
    onSubmit: personalDetailsOnSubmit,
  });

  const creditCardInitialValues = {
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  };

  const creditCardValidationSchema = Yup.object({
    cardholderName: Yup.string().required("Cardholder Name is required"),
    cardNumber: Yup.string()
      .required("Card Number is required")
      .matches(
        /^4[0-9]{12}(?:[0-9]{3})?$/,
        "Invalid card number. Please enter a valid Visa card number."
      ),
    expiry: Yup.string()
      .required("Expiry Date is required")
      .matches(
        /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
        "Invalid expiry date. Please use the format MM/YY."
      ),
    cvc: Yup.string()
      .required("CVC is required")
      .matches(/^[0-9]{3}$/, "Invalid CVC. Please enter a valid 3-digit CVC."),
  });

  const creditCardOnSubmit = (values) => {
    console.log(values);
    setStep(4);

    let data = {
      ...details,
      ...values,
    };

    setDetails(data);
  };

  const creditCardFormik = useFormik({
    initialValues: creditCardInitialValues,
    validationSchema: creditCardValidationSchema,
    onSubmit: creditCardOnSubmit,
  });

  const confirmationInitialValues = {
    acceptTerms: false,
  };

  const confirmationValidationSchema = Yup.object({
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms and Conditions and Reservation Policy"
    ),
  });

  const confirmationOnSubmit = (values) => {
    console.log(values);
    setStep(5);

    let data = {
      ...details,
      ...values,
    };
    setDetails(data);
  };

  const confirmationFormik = useFormik({
    initialValues: confirmationInitialValues,
    validationSchema: confirmationValidationSchema,
    onSubmit: confirmationOnSubmit,
  });

  return (
    <>
      <div className="mt-5 w-75 w-md-50 mx-auto">
        <ul className="d-flex nav nav-underline nav justify-content-center pt-5 flex-nowrap">
          <li className="nav-item">
            <a
              className={`nav-link link-dark text-decoration-none ${step === 1 ? "active fw-medium" : ""
                }`}
              aria-current="page"
              href="/booking"
              onClick={(e) => {
                e.preventDefault();
                setStep(1);
              }}
              aria-label="Reservation Details"
            >
              {details.date && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              )}{" "}
              Reservation Details
            </a>
          </li>

          <p className="nav-link link-dark text-decoration-none">{">"}</p>
          <li className="nav-item">
            <a
              className={`nav-link link-dark text-decoration-none ${step === 2 ? "active fw-medium" : ""
                }`}
              href="/booking"
              onClick={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              aria-label="Your Details"
            >
              {details.firstName && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              )}{" "}
              Your Details
            </a>
          </li>
          <p className="nav-link link-dark text-decoration-none">{">"}</p>
          <li className="nav-item">
            <a
              className={`nav-link link-dark text-decoration-none ${step === 3 ? "active fw-medium" : ""
                }`}
              href="/booking"
              onClick={(e) => {
                e.preventDefault();
                setStep(3);
              }}
              aria-label="Credit Card Details"
            >
              {details.cardNumber && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              )}{" "}
              Credit Card Details
            </a>
          </li>
          <p className="nav-link link-dark text-decoration-none">{">"}</p>
          <li className="nav-item">
            <a
              className={`nav-link link-dark text-decoration-none ${step === 4 ? "active fw-medium" : ""
                }`}
              href="/booking"
              onClick={(e) => {
                e.preventDefault();
                setStep(4);
              }}
              aria-label="Summary"
            >
              {details.acceptTerms && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              )}{" "}Summary
            </a>
          </li>
        </ul>

        {step === 1 && (
          <Form
            className="row g-3 pt-3"
            onSubmit={reservationFormik.handleSubmit}
            aria-label="Reservation Form"
          >
            <p className="text-center" aria-label="Reservation Instructions">
              To help us find the best table for you, select the preferred party
              size, date, and time of your reservation.
            </p>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                  type="date"
                  id="date"
                  name="date"
                  {...reservationFormik.getFieldProps("date")}
                  aria-label="Select Date"
                />
                {reservationFormik.touched.date &&
                  reservationFormik.errors.date ? (
                  <Form.Text className="text-danger">
                    {reservationFormik.errors.date}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Control
                  as="select"
                  id="time"
                  name="time"
                  {...reservationFormik.getFieldProps("time")}
                  aria-label="Select Time"
                >
                  <option defaultValue hidden value="">
                    __:__
                  </option>
                  {availableTimes.map((timeSlot) => (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </Form.Control>
                {reservationFormik.touched.time &&
                  reservationFormik.errors.time ? (
                  <Form.Text className="text-danger">
                    {reservationFormik.errors.time}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="partySize">Party Size</Form.Label>
                <Form.Control
                  type="number"
                  id="partySize"
                  name="partySize"
                  {...reservationFormik.getFieldProps("partySize")}
                  aria-label="Select Party Size"
                />
                {reservationFormik.touched.partySize &&
                  reservationFormik.errors.partySize ? (
                  <Form.Text className="text-danger">
                    {reservationFormik.errors.partySize}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Control
                  as="select"
                  id="occasion"
                  name="occasion"
                  {...reservationFormik.getFieldProps("occasion")}
                  aria-label="Select Occasion"
                >
                  <option defaultValue value=""></option>
                  <option key="Anniversary" value="Anniversary">
                    Anniversary
                  </option>
                  <option key="Birthday" value="Birthday">
                    Birthday
                  </option>
                  <option key="Engagement" value="Engagement">
                    Engagement
                  </option>
                </Form.Control>
                {reservationFormik.touched.occasion &&
                  reservationFormik.errors.occasion ? (
                  <Form.Text className="text-danger">
                    {reservationFormik.errors.occasion}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-12 text-center">
              <Button type="submit" className="btn btn-dark rounded-pill mb-3" aria-label="Find a Table Button">
                Find a Table
              </Button>
            </div>
          </Form>
        )}

        {step === 2 && (
          <Form
            className="row g-3 pt-3"
            onSubmit={personalDetailsFormik.handleSubmit}
            aria-label="Personal Details Form"
          >
            <p className="text-center" aria-label="Personal Details Instructions">Please provide your personal details.</p>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  {...personalDetailsFormik.getFieldProps("firstName")}
                  aria-label="First Name"
                />
                {personalDetailsFormik.touched.firstName &&
                  personalDetailsFormik.errors.firstName ? (
                  <Form.Text className="text-danger">
                    {personalDetailsFormik.errors.firstName}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  {...personalDetailsFormik.getFieldProps("lastName")}
                  aria-label="Last Name"
                />
                {personalDetailsFormik.touched.lastName &&
                  personalDetailsFormik.errors.lastName ? (
                  <Form.Text className="text-danger">
                    {personalDetailsFormik.errors.lastName}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  {...personalDetailsFormik.getFieldProps("phone")}
                  aria-label="Phone Number"
                />
                {personalDetailsFormik.touched.phone &&
                  personalDetailsFormik.errors.phone ? (
                  <Form.Text className="text-danger">
                    {personalDetailsFormik.errors.phone}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  {...personalDetailsFormik.getFieldProps("email")}
                  aria-label="Email Address"
                />
                {personalDetailsFormik.touched.email &&
                  personalDetailsFormik.errors.email ? (
                  <Form.Text className="text-danger">
                    {personalDetailsFormik.errors.email}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-12">
              <Form.Group>
                <Form.Label htmlFor="specialRequirements">Special Requirements</Form.Label>
                <Form.Control
                  as="textarea"
                  id="specialRequirements"
                  name="specialRequirements"
                  rows={3}
                  {...personalDetailsFormik.getFieldProps(
                    "specialRequirements"
                  )}
                  aria-label="Special Requirements"
                />
              </Form.Group>
            </div>
            <div className="col-12 text-center">
              <Button type="submit" className="btn btn-dark rounded-pill mb-3" aria-label="Submit Button">
                Submit
              </Button>
            </div>
          </Form>
        )}

        {step === 3 && (
          <Form
            className="row g-3 pt-3"
            onSubmit={creditCardFormik.handleSubmit}
            aria-label="Credit Card Details Form"
          >
            <p className="text-center" aria-label="Credit Card Details Instructions">Credit card details are required to secure your booking.</p>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="cardholderName">Cardholder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="cardholderName"
                  id="cardholderName"
                  placeholder="Enter cardholder name"
                  {...creditCardFormik.getFieldProps("cardholderName")}
                  aria-label="Cardholder Name"
                />
                {creditCardFormik.touched.cardholderName &&
                  creditCardFormik.errors.cardholderName ? (
                  <Form.Text className="text-danger">
                    {creditCardFormik.errors.cardholderName}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="cardNumber">Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Enter card number"
                  {...creditCardFormik.getFieldProps("cardNumber")}
                  aria-label="Card Number"
                />
                {creditCardFormik.touched.cardNumber &&
                  creditCardFormik.errors.cardNumber ? (
                  <Form.Text className="text-danger">
                    {creditCardFormik.errors.cardNumber}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="expiry">Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  name="expiry"
                  id="expiry"
                  {...creditCardFormik.getFieldProps("expiry")}
                  aria-label="Expiry Date"
                />
                {creditCardFormik.touched.expiry &&
                  creditCardFormik.errors.expiry ? (
                  <Form.Text className="text-danger">
                    {creditCardFormik.errors.expiry}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label htmlFor="cvc">CVC</Form.Label>
                <Form.Control
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="Enter CVC"
                  {...creditCardFormik.getFieldProps("cvc")}
                  aria-label="CVC"
                />
                {creditCardFormik.touched.cvc && creditCardFormik.errors.cvc ? (
                  <Form.Text className="text-danger">
                    {creditCardFormik.errors.cvc}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-12 text-center">
              <Button type="submit" className="btn btn-dark rounded-pill mb-3" aria-label="Submit Credit Card Details Button">
                Submit Credit Card Details
              </Button>
            </div>
          </Form>
        )}

        {step === 4 && (
          <>
            <div className="row pt-3">
              <p className="text-center" aria-label="Confirm Reservation Instructions">
                Please confirm your booking details are correct before
                proceeding so that we can hold your table.
              </p>
              <div className="col-sm-12 col-md-7">
                <table className="table w-100 w-sm-50 mx-auto" aria-label="Booking Details">
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row">First Name</th>
                      <td>{details.firstName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Surname</th>
                      <td>{details.lastName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Mobile</th>
                      <td colSpan="1">{details.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td colSpan="2">{details.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date</th>
                      <td colSpan="3">{details.date}</td>
                    </tr>
                    <tr>
                      <th scope="row">For</th>
                      <td colSpan="4">{details.partySize}</td>
                    </tr>
                    <tr>
                      <th scope="row">Requests</th>
                      <td colSpan="5">{details.specialRequirements}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 col-md-5">
                <Card
                  className="rounded-3 bg-dark text-light"
                  style={{ width: "300px" }}
                  aria-label="Credit Card Details"
                >
                  <Card.Body>
                    <h5>
                      {details.cardNumber
                        ?.replace(/\D/g, "")
                        ?.replace(/(.{4})/g, "$1 ")
                        ?.trim()}
                    </h5>
                    <Card.Text className="text-uppercase text-start font-monospace mb-1">
                      {details.cardholderName}
                    </Card.Text>
                    <div className="d-flex justify-content-between font-monospace">
                      <span aria-label="Expires">Expires: {details.expiry}</span>
                      <span aria-label="CVC">CVC: {details.cvc}</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row">
              <Form onSubmit={confirmationFormik.handleSubmit}>
                <div className="form-check d-flex justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="acceptTerms"
                    {...confirmationFormik.getFieldProps("acceptTerms")}
                    aria-label="Accept Terms and Conditions"
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    I accept the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Terms and Conditions"
                    >
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Reservation Policy"
                    >
                      reservation policy
                    </a>
                  </label>
                </div>
                <div className="text-center">
                  {confirmationFormik.touched.acceptTerms &&
                    confirmationFormik.errors.acceptTerms && (
                      <div className="text-danger">
                        {confirmationFormik.errors.acceptTerms}
                      </div>
                    )}
                </div>
                <div className="text-center mt-3">
                  <Button
                    type="submit"
                    className="btn btn-dark rounded-pill"
                    aria-label="Confirm Reservation Button"
                  >
                    Confirm Reservation
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}

        {step === 5 && (
          <div className="alert alert-success text-center" role="alert">
            <h4 className="alert-heading">Reservation Confirmed!</h4>
            <p>
              Your reservation has been successfully confirmed. An email with all
              the details has been sent to your registered email address:{" "}
              <strong>{details.email}</strong>
            </p>
            <hr />
            <p className="mb-0">Thank you for choosing us! We look forward to serving you.</p>
            <Link to='/'>
              <button type="button" className="btn btn-success rounded-pill mt-2" aria-label="Go back to home">
                Go back to home
              </button>
            </Link>
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

export default BookingPage;
