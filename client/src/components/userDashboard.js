import React, { useEffect } from "react";
import Sidebar from "./dashboardSideBar";
import RankResume from "./rankResume";

const UserDashboard = ({
  userId,
  userRank,
  getDashboardData,
  summonerRank,
  logoutClick,
}) => {
  useEffect(() => {
    getDashboardData({
      user: userId.user.summonerAccountData,
      server: userId.user.server,
    });
  }, []);
  return (
    <div className="h-100 d-flex">
      <Sidebar loggedUser={userId} logoutClick={logoutClick} />
      <div className="w-100">
        <div className="mt-4">
          <h1>Your Account</h1>
        </div>
        <div className="d-flex">
          <RankResume
            userData={userId}
            userRank={userRank}
            summonerRank={summonerRank}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
