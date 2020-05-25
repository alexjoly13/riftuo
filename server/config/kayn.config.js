const { Kayn, REGIONS, METHOD_NAMES, RedisCache } = require("kayn");

const redisCache = new RedisCache({
  host: "redis",
  port: 6379,
});

const kayn = Kayn(process.env.RIOT_API_KEY)({
  region: REGIONS.EUROPE_WEST,
  apiURLPrefix: "https://%s.api.riotgames.com",
  locale: "en_US",
  debugOptions: {
    isEnabled: true,
    showKey: false,
  },
  requestOptions: {
    shouldRetry: true,
    numberOfRetriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
    burst: true,
    shouldExitOn403: false,
  },
  cacheOptions: {
    cache: redisCache,
    timeToLives: {
      useDefault: false,
      byGroup: {},
      byMethod: {
        [METHOD_NAMES.LEAGUE.GET_ALL_LEAGUE_POSITIONS_FOR_SUMMONER_V4]: 5000,
        [METHOD_NAMES.MATCH.GET_MATCH]: 60000,
        [METHOD_NAMES.MATCH.GET_MATCHLIST]: 60000,
      },
    },
  },
});

module.exports = kayn;
