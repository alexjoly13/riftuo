import React, { useEffect } from "react";

import "./kdaStats.scss";

const KDAStats = ({ userData, getLastMatches, lastMatchesArray }) => {
  useEffect(() => {
    getLastMatches({
      user: userData.user.summonerAccountData,
      server: userData.user.server,
    });
  }, []);
  console.log("Les 20 dernières games :", lastMatchesArray);
  return (
    <div>
      <p>HELLO FRIEND</p>
    </div>
  );
};

export default KDAStats;
