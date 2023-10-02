import React from "react";
import reserveTableBg from "../images/reserve_table_bg.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReserveTable = () => {
  const navigate = useNavigate();
  const initialValues = {
    partySize: 0,
    date: "",
    time: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    const { partySize, date, time, } = values;
    console.log(`/table_reservation_details?partySize=${partySize}` & `date=${date}` & `time=${time}`);
    navigate(`/table_reservation_details`);
  }

  const validationSchema = Yup.object({
    partySize: Yup.number()
      .required("Please enter the number of Guests!")
      .min(2, "Party size must be at least 2")
      .max(10, "Party size cannot exceed 10"),
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date must be in the future"),
    time: Yup.string()
      .required("Time is required")
      .oneOf(
        [
          "17:00",
          "17:30",
          "18:30",
          "20:00",
          "20:30",
          "21:00",
          "22:00",
          "23:30",
        ],
        "Please select a valid time"
      ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <section
      className="mx-auto border-top border-bottom mb-3 glass_morph"
      id="reserve_table_section"
      style={{
        backgroundImage: `url(${reserveTableBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h3 className="my-4 text-center">Reserve a Table</h3>
      <p className="text-center">
        To help us find the best table for you, select the preferred party size,
        date and time of your reservation.
      </p>
      <Form className="row g-3" onSubmit={formik.handleSubmit}>
        <div className="col-md-4">
          <Form.Group className="mb-3">
            <Form.Label>Party Size</Form.Label>
            <Form.Control
              type="number"
              id="partySize"
              name="partySize"
              {...formik.getFieldProps("partySize")}
            />
            {formik.touched.partySize && formik.errors.partySize ? (
              <Form.Text className="text-danger">
                {formik.errors.partySize}
              </Form.Text>
            ) : null}
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              id="date"
              name="date"
              {...formik.getFieldProps("date")}
            />
            {formik.touched.date && formik.errors.date ? (
              <Form.Text className="text-danger">
                {formik.errors.date}
              </Form.Text>
            ) : null}
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              as="select"
              id="time"
              name="time"
              {...formik.getFieldProps("time")}
            >
              <option defaultValue hidden value=""></option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:30">18:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:30">23:30</option>
            </Form.Control>
            {formik.touched.time && formik.errors.time ? (
              <Form.Text className="text-danger">
                {formik.errors.time}
              </Form.Text>
            ) : null}
          </Form.Group>
        </div>
        <div className="col-12 text-center">
          <Button type="submit" className="btn btn-dark rounded-pill mb-3">
            Find a Table
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ReserveTable;
