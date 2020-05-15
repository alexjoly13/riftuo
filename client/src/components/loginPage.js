import React from "react";
import Form from "react-bootstrap/Form";

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

const LoginPage = ({ isLoggedIn }) => {
  return (
    <section className="signup-section">
      <div className="d-flex justify-content-center">
        <h1>SIGN IN</h1>
      </div>
      <div className="form-container d-flex align-items-center justify-content-center">
        <div className="form-and-result p-5">
          <Form>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text"></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
