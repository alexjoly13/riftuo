import React, { Fragment } from "react";

import "./kdaStats.scss";
import { getAverageKDA } from "../helpers/stats-helper";

const KDAStats = ({ userData, lastMatchesArray }) => {
  console.log("Les 20 dernières games :", lastMatchesArray);
  return (
    <Fragment>
      {lastMatchesArray.isLoaded ? (
        <div className="col-4 bg-white p3">
          <div>
            <h5>Average Stats</h5>
          </div>
          {getAverageKDA(
            lastMatchesArray.matches,
            userData.user.summonerAccountData.name
          )}
        </div>
      ) : (
        <p>LOADING .....</p>
      )}
    </Fragment>
  );
};

export default KDAStats;
