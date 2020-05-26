import React, { useEffect } from "react";
import Sidebar from "./dashboardSideBar";
import RankResume from "./rankResume";
import KDAStats from "./kdaStats";

const UserDashboard = ({
  userId,
  userRank,
  getLastMatches,
  lastMatchesArray,
  summonerRank,
  logoutClick,
}) => {
  useEffect(() => {
    getLastMatches({
      user: userId.user.summonerAccountData,
      server: userId.user.server,
    });
  }, []);

  return (
    <div className="h-100 d-flex">
      <Sidebar loggedUser={userId} logoutClick={logoutClick} />
      <div className="w-100">
        <div className="mt-4 ml-3">
          <h1>Your Account</h1>
        </div>
        <div className="container">
          <div className="row">
            <RankResume
              userData={userId}
              userRank={userRank}
              summonerRank={summonerRank}
            />

            <KDAStats userData={userId} lastMatchesArray={lastMatchesArray} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
