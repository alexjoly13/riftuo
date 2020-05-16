import React from "react";

const UserDashboard = ({ userId }) => {
  console.log(userId);
  return <h1>Hi {userId.user.firstName}!</h1>;
};

export default UserDashboard;
