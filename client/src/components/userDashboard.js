import React from "react";
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
  return (
    <div className="h-100 d-flex">
      <Sidebar loggedUser={userId} logoutClick={logoutClick} />
      <div className="w-100">
        <div className="mt-4">
          <h1>Your Account</h1>
        </div>
        <div className="d-flex">
          <div>
            <RankResume
              userData={userId}
              userRank={userRank}
              summonerRank={summonerRank}
            />
          </div>
          <div>
            <KDAStats
              userData={userId}
              lastMatchesArray={lastMatchesArray}
              getLastMatches={getLastMatches}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
