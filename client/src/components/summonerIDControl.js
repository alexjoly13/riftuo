import React from "react";
import Button from "react-bootstrap/Button";

import { profileIconGetter } from "../helpers/image-helper";

import "./summonerIDControl.scss";
import { serverNameFormatter } from "../helpers/account-info-helper";

const SummonerIDControl = ({ userInputInfos, summData }) => {
  return (
    <div className="mt-4">
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
        <Button variant="primary" className="mr-3">
          Confirm
        </Button>
        <Button variant="danger">Cancel</Button>
      </div>
    </div>
  );
};

export default SummonerIDControl;
