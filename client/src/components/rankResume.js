import React, { useEffect, Fragment } from "react";

import "./rankResume.scss";
import { winrateCalculator } from "../helpers/stats-helper";

const RankResume = ({ userData, userRank, summonerRank }) => {
  useEffect(() => {
    summonerRank({
      userId: userData.user.summonerAccountData.id,
    });
  }, []);

  console.log("le Rank du User", userRank);

  const rankData = userRank.rank[0];

  return (
    <Fragment>
      {userRank.isLoaded ? (
        <div className="col-4 bg-white p-3 mr-3">
          <div>
            <h5>Ranking</h5>
          </div>
          <div>
            <div>
              <span>
                {rankData.tier} {rankData.rank}
              </span>
            </div>
            <div>
              <span>
                {rankData.wins}W / {rankData.losses}L
              </span>
            </div>
            <div>
              <span>{rankData.leaguePoints} LP</span>
            </div>
            <div>{winrateCalculator(rankData.wins, rankData.losses)}</div>
          </div>
        </div>
      ) : (
        <div>
          <span>IS LOADING ....</span>
        </div>
      )}
    </Fragment>
  );
};

export default RankResume;
