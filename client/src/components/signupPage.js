import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SummonerIDControl from "./summonerIDControl";

import "./signupPage.scss";

const SignupPage = ({
  values,
  submitMethod,
  userData,
  validatedSubmit,
  isLoggedIn,
  handleInputChange,
}) => {
  return (
    <section className="signup-section">
      <div className="d-flex justify-content-center">
        <h1>CREATE AN ACCOUNT</h1>
      </div>
      <div className="form-container d-flex align-items-center justify-content-center">
        <div className="form-and-result p-5">
          <Form onSubmit={(event) => submitMethod(event, values)}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
            <Form.Label>Summoner Name</Form.Label>
            <Form.Control
              type="text"
              name="summonerName"
              value={values.summonerName}
              onChange={handleInputChange}
            />
            <Form.Label>Server</Form.Label>
            <Form.Control
              as="select"
              name="server"
              value={values.server}
              onChange={handleInputChange}
            >
              <option value="EUROPE_WEST">EUW</option>
              <option value="EUROPE_NORTH">EUNE</option>
              <option value="NORTH_AMERICA">NA</option>
            </Form.Control>
            <div className="d-flex w-100 mt-4 justify-content-center">
              <Button variant="info" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          {userData && (
            <SummonerIDControl
              userInputInfos={values}
              summData={userData}
              formSubmit={validatedSubmit}
              loggedIn={isLoggedIn}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
