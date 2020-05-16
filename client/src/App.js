import React, { useState } from "react";
import LandingPage from "./components/landingPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./components/signupPage";
import UserDashboard from "./components/userDashboard";
import { postSummonerSignup, postValidatedSignup, postLogin } from "./api";
import NavigationBar from "./components/navBar";
import LoginPage from "./components/loginPage";

function App() {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    summonerName: "",
    server: "EUROPE_WEST",
  });

  let userLoggedData = localStorage.getItem("currentUser");
  if (userLoggedData) {
    userLoggedData = JSON.parse(userLoggedData);
  }

  console.log(userLoggedData);
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
        window.location.reload();

        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const login = async (event, userData) => {
    event.preventDefault();
    await postLogin(userData)
      .then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        setIsLoggedIn(true);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
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
            render={() => <UserDashboard userId={currentUser} />}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
