import React, { useEffect } from "react";

import "./rankResume.scss";
import { winrateCalculator } from "../helpers/stats-helper";

const RankResume = ({ userData, userRank, summonerRank }) => {
  useEffect(() => {
    summonerRank({
      userId: userData.user.summonerAccountData.id,
    });
  }, [userData.user.summonerAccountData.id]);

  console.log("le Rank du User", userRank);

  const rankData = userRank.rank[0];

  return (
    <div className="">
      {userRank.isLoaded ? (
        <div>
          <div className="bg-white p-3">
            <div>
              <h4>Rank Details</h4>
            </div>
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
    </div>
  );
};

export default RankResume;
