
// Date From ReserveTable and display in a step form manner
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ReserveTableDetails = () => {
  const [showAlert, setShowAlert] = useState(false);

  const initialValues = {
    firstName: '',
    email: '',
    type: 'hireMe',
    comment: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    type: Yup.string().required('Required'),
    comment: Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Your form submission logic here
      // Replace this with your actual API call

      try {
        // Simulate a server request (remove this in production)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setShowAlert(true);
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <div className="mt-5">
        <Form onSubmit={formik.handleSubmit}>
          <h1>Contact me</h1>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              name="firstName"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Form.Text className="text-danger">{formik.errors.firstName}</Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type of enquiry</Form.Label>
            <Form.Select id="type" name="type" {...formik.getFieldProps('type')}>
              <option value="hireMe">Freelance project proposal</option>
              <option value="openSource">Open source consultancy session</option>
              <option value="other">Other</option>
            </Form.Select>
            {formik.touched.type && formik.errors.type ? (
              <Form.Text className="text-danger">{formik.errors.type}</Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              id="comment"
              name="comment"
              {...formik.getFieldProps('comment')}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <Form.Text className="text-danger">{formik.errors.comment}</Form.Text>
            ) : null}
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
          {showAlert && (
            <Alert className="mt-3" variant="success">
              Form submitted successfully.
            </Alert>
          )}
        </Form>
      </div>
      <hr />
    </>
  );
};

export default ReserveTableDetails;

