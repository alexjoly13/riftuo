import React from "react";

import "./dashboardSidebar.scss";
import { profileIconGetter } from "../helpers/image-helper";

const Sidebar = ({ loggedUser, logoutClick }) => {
  const userData = loggedUser.user;
  return (
    <div className="sidebar m-0 h-100">
      <div className="app-title mt-4 d-flex justify-content-center">
        <h2>Riftuo</h2>
      </div>
      <div className="user-recap d-flex align-items-center">
        <div className="profile-image">
          <div className="w-100 d-flex justify-content-center">
            <div className="profile-icon-container">
              <img
                className="profile-icon"
                src={profileIconGetter(
                  userData.summonerAccountData.profileIconId
                )}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <span className="summoner-name">{userData.summonerName}</span>
          </div>
        </div>
      </div>
      <div className="links-container">
        <a className="link-wrapper" href="/user/dashboard">
          <div className="dashboard-link  bt d-flex justify-content-center align-items-center">
            <span>Dashboard</span>
          </div>
        </a>
        <a href="/users">
          <div className="dashboard-link d-flex justify-content-center align-items-center">
            <span>Find Teammates</span>
          </div>
        </a>
        <a href="/settings">
          <div className="dashboard-link d-flex justify-content-center align-items-center">
            <span>Account Settings</span>
          </div>
        </a>
        <a onClick={logoutClick}>
          <div className="dashboard-link d-flex justify-content-center align-items-center">
            <span>Logout</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
