import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { profileIconGetter } from "../helpers/image-helper";
import { serverNameFormatter } from "../helpers/account-info-helper";

import "./summonerIDControl.scss";

const SummonerIDControl = ({
  userInputInfos,
  summData,
  formSubmit,
  loggedIn,
}) => {
  const [finalUser] = useState({
    userInfos: userInputInfos,
    riotInfos: summData.user,
  });

  console.log(finalUser);
  return (
    <div className="mt-4">
      {loggedIn && <Redirect to="/user/dashboard" />}
      <div>
        <h3 className="text-center">Is this your account ?</h3>
      </div>
      <div className="player-id-border-container d-flex justify-content-center p-1">
        <div className="player-id-card d-flex align-items-center">
          <div className="profile-icon-container w-25">
            <img
              src={profileIconGetter(summData.user.profileIconId)}
              className="profile-icon w-100"
              alt=""
            />
          </div>
          <div className="ml-2">
            <div>
              <span className="summoner-name">{summData.user.name} </span>
              <span>({serverNameFormatter(userInputInfos.server)})</span>
            </div>
            <div>
              <span>Level {summData.user.summonerLevel}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-4 justify-content-center">
        <Button
          variant="primary"
          className="mr-3"
          type="submit"
          onClick={(event) => formSubmit(event, finalUser)}
        >
          Confirm
        </Button>
        <Button variant="danger">Cancel</Button>
      </div>
    </div>
  );
};

export default SummonerIDControl;
