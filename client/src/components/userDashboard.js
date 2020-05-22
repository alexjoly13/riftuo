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
  // useEffect(() => {
  //   getDashboardData({
  //     user: userId.user.summonerAccountData,
  //     server: userId.user.server,
  //   });
  // }, [getDashboardData, userId]);
  return (
    <div className="h-100 d-flex">
      <Sidebar loggedUser={userId} logoutClick={logoutClick} />
      <div className="d-inline-flex">
        <RankResume
          userData={userId}
          userRank={userRank}
          summonerRank={summonerRank}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
