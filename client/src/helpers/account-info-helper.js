export const serverNameFormatter = (serverName) => {
  switch (serverName) {
    case "EUROPE_WEST":
      return "EUW";
    case "EUROPE_NORTH":
      return "EUNE";
    case "NORTH_AMERICA":
      return "NA";
  }
};
