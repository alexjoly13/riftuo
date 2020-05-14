import React from "react";

import { profileIconGetter } from "../helpers/image-helper";

import "./summonerIDControl.scss";

const SummonerIDControl = ({ userInputInfos, summData }) => {
  return (
    <div>
      <div>
        <h3>Is this your account ?</h3>
      </div>
      <div>
        <img src={profileIconGetter(summData.user.profileIconId)} alt="" />
      </div>
      <div>
        <span>{summData.user.name}</span>
        <span>{userInputInfos.server}</span>
        <span>{summData.user.summonerLevel}</span>
      </div>
    </div>
  );
};

export default SummonerIDControl;
