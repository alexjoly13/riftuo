import React from "react";

export function winrateCalculator(wins, loss) {
  const result = Math.floor((wins / (wins + loss)) * 100);

  if (result >= 60) {
    return <span className="victory-text-color">{result}%</span>;
  } else if (result <= 30) {
    return <span className="defeat-text-color">{result}%</span>;
  } else {
    return <span>{result}%</span>;
  }
}

export function kdaCalculator(kills, assists, deaths) {
  if (kills === 0 && assists === 0 && deaths === 0) {
    return "0:00 KDA";
  } else if (kills > 0 && assists > 0 && deaths === 0) {
    return "Perfect KDA";
  } else {
    return Math.floor(((kills + assists) / deaths) * 100) / 100 + " :1 KDA";
  }
}

export function getAverageKDA(lastGamesArray, userSummonerName) {
  let globalKills = 0;
  let globalDeaths = 0;
  let globalAssists = 0;
  const playerIds = [];
  lastGamesArray.map((oneGame) => {
    oneGame.participantIdentities.map((partId) => {
      return (
        partId.player.summonerName === userSummonerName &&
        playerIds.push(partId.participantId)
      );
    });

    return oneGame.participants.map((oneParticipant, i) => {
      return oneParticipant.participantId === playerIds[i]
        ? ((globalKills += oneParticipant.stats.kills),
          (globalDeaths += oneParticipant.stats.deaths),
          (globalAssists += oneParticipant.stats.assists))
        : ((globalKills += 0), (globalDeaths += 0), (globalAssists += 0));
    });
  });

  const killAverage = globalKills / lastGamesArray.length;
  const deathAverage = globalDeaths / lastGamesArray.length;
  const assistAverage = globalAssists / lastGamesArray.length;
  return (
    <div>
      <div>
        <span className="victory-text-color font-weight-bold">
          {killAverage}
        </span>{" "}
        <span> / </span>
        <span className="defeat-text-color font-weight-bold">
          {deathAverage}
        </span>{" "}
        <span> / </span>
        <span className="assists-text-color font-weight-bold">
          {assistAverage}
        </span>
      </div>

      <div>
        <span>{kdaCalculator(killAverage, assistAverage, deathAverage)}</span>
      </div>
    </div>
  );
}
