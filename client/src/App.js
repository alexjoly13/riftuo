import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./signupPage";
import { postSummonerSignup } from "./api";

function App() {
  const [user, setUser] = useState("");

  const onSubmit = (event, userData) => {
    event.preventDefault();
    postSummonerSignup(userData)
      .then((response) => {
        setUser({ user: response.data });
        // console.log("c'est le USER", user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signup"
            render={() => (
              <SignupPage userData={user} submitMethod={onSubmit} />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
