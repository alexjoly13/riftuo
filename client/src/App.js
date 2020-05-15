import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./components/signupPage";
import UserDashboard from "./components/userDashboard";
import { postSummonerSignup, postValidatedSignup } from "./api";
import NavigationBar from "./components/navBar";
import LoginPage from "./components/loginPage";

function App() {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let userLoggedData = localStorage.getItem("currentUser");
  if (userLoggedData) {
    userLoggedData = JSON.parse(userLoggedData);
  }

  console.log(userLoggedData);
  const [currentUser, setCurrentUser] = useState(userLoggedData);

  const onSubmit = (event, userData) => {
    event.preventDefault();
    event.stopPropagation();
    postSummonerSignup(userData)
      .then((response) => {
        setUser({ user: response.data });
      })
      .catch((err) => console.log(err));
  };

  const validatedOnSubmit = (event, userData) => {
    postValidatedSignup(userData)
      .then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        setIsLoggedIn(true);

        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar loggedUser={currentUser} logoutClick={logout} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signup"
            render={() => (
              <SignupPage
                userData={user}
                submitMethod={onSubmit}
                validatedSubmit={validatedOnSubmit}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route
            path="/login"
            render={() => <LoginPage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/user/dashboard"
            render={() => <UserDashboard userId={currentUser} />}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
