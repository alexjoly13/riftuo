import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./signupPage";
import { postSummonerSignup } from "./api";

function App() {
  const [user, setUser] = useState({ data: "" });

  const onSubmit = (event, userData) => {
    postSummonerSignup(userData)
      .then((response) => {
        setUser({ ...user, data: response.data });
        console.log("c'est le USER", user);
      })
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signup"
            render={() => <SignupPage submitMethod={onSubmit} />}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
