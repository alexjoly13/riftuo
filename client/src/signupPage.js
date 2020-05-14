import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SummonerIDControl from "./components/summonerIDControl";

const SignupPage = ({ submitMethod, userData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    summonerName: "",
    server: "EUROPE_WEST",
  });

  console.log("user par props", userData);

  return (
    <div className="">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {userData && (
        <SummonerIDControl userInputInfos={values} summData={userData} />
      )}
    </div>
  );
};

export default SignupPage;
