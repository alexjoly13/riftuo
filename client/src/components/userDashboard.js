import React, { useEffect } from "react";

const UserDashboard = ({ userId, getDashboardData }) => {
  useEffect(() => {
    getDashboardData({
      user: userId.user.summonerAccountData,
      server: userId.user.server,
    });
  }, [getDashboardData, userId]);
  return <h1>Hi {userId.user.firstName}!</h1>;
};

export default UserDashboard;
