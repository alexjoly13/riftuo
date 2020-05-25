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
