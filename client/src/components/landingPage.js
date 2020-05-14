import React, { Fragment } from "react";
import HomepageButton from "./homePageButton";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landing-page">
        <h1>Riftuo.</h1>
        <p>
          Find a duo partner we select for you, that perfectly suits your
          playstyle
        </p>
        <HomepageButton />
      </div>
    </Fragment>
  );
};

export default LandingPage;
