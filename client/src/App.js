import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./components/signupPage";
import UserDashboard from "./components/userDashboard";
import {
  postSummonerSignup,
  postValidatedSignup,
  postLogin,
  dashboardData,
  getSummonersRank,
} from "./api";
import NavigationBar from "./components/navBar";
import LoginPage from "./components/loginPage";

function App() {
  const [user, setUser] = useState({ user: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    summonerName: "",
    server: "EUROPE_WEST",
  });

  const [userRank, setUserRank] = useState({ rank: "", isLoaded: false });
  const [lastMatches, setLastMatches] = useState({
    matches: "",
    isLoaded: false,
  });

  let userLoggedData = localStorage.getItem("currentUser");
  if (userLoggedData) {
    userLoggedData = JSON.parse(userLoggedData);
  }

  console.log("Le user loggué :", userLoggedData);
  const [currentUser, setCurrentUser] = useState(userLoggedData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event, userData) => {
    event.preventDefault();
    postSummonerSignup(userData)
      .then((response) => {
        setUser({ user: response.data });
      })
      .catch((err) => console.log(err));
  };

  const validatedOnSubmit = async (event, userData) => {
    await postValidatedSignup(userData)
      .then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        setIsLoggedIn(true);

        return response.data;
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const login = async (event, userData) => {
    event.preventDefault();
    await postLogin(userData)
      .then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        setUser({ ...user, userData: response.data });
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
  };

  const getLastMatches = (summonerName) => {
    dashboardData(summonerName)
      .then((response) => {
        setLastMatches({
          ...lastMatches,
          matches: response.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  };

  const summonerRank = (summonerId) => {
    getSummonersRank(summonerId)
      .then((response) =>
        setUserRank({ ...userRank, rank: response.data, isLoaded: true })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar
          loggedUser={currentUser}
          logoutClick={logout}
          {...(currentUser && { displayNone: "d-none" })}
        />
      </header>
      <div className="App-content">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signup"
            render={() => (
              <SignupPage
                userData={user}
                values={values}
                handleInputChange={handleInputChange}
                submitMethod={onSubmit}
                validatedSubmit={validatedOnSubmit}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <LoginPage
                values={values}
                isLoggedIn={isLoggedIn}
                handleInputChange={handleInputChange}
                login={login}
              />
            )}
          />
          <Route
            path="/user/dashboard"
            render={() => (
              <UserDashboard
                userId={currentUser}
                userRank={userRank}
                logoutClick={logout}
                lastMatchesArray={lastMatches}
                getLastMatches={getLastMatches}
                summonerRank={summonerRank}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
