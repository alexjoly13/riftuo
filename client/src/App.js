import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./components/signupPage";
import { postSummonerSignup, postValidatedSignup } from "./api";

function App() {
  const [user, setUser] = useState("");

  const onSubmit = (event, userData) => {
    event.preventDefault();
    postSummonerSignup(userData)
      .then((response) => {
        setUser({ user: response.data });
      })
      .catch((err) => console.log(err));
  };

  const validatedOnSubmit = (event, userData) => {
    postValidatedSignup(userData)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   validatedOnSubmit();
  // });

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signup"
            render={() => (
              <SignupPage
                userData={user}
                submitMethod={onSubmit}
                validatedSubmit={validatedOnSubmit}
              />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
