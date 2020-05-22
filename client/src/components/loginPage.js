import React from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./loginPage.scss";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const LoginPage = ({ isLoggedIn, handleInputChange, values, login }) => {
  return (
    <section className="signup-section">
      {isLoggedIn && <Redirect to="/user/dashboard" />}
      <div className="d-flex justify-content-center">
        <h1>SIGN IN</h1>
      </div>
      <div className="form-container d-flex align-items-center justify-content-center">
        <div className="form-and-result p-5">
          <Form onSubmit={(event) => login(event, values)}>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            ></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            ></Form.Control>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
