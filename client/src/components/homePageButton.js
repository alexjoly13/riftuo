import React from "react";
import { Link } from "react-router-dom";

import "./homePageButton.scss";

const HomepageButton = () => {
  return (
    <Link to="/signup">
      <button className="landing-page-button fill">I'm interested</button>
    </Link>
  );
};

export default HomepageButton;
