function packResult(home, away) {
    let homeStr = Number(home).toString(2);
    while (homeStr.length < 4) homeStr = "0" + homeStr;
    let awayStr = Number(away).toString(2);
    while (awayStr.length < 4) awayStr = "0" + awayStr;
    return parseInt(awayStr + homeStr, 2);
  }
  
  function unpackResult(result) {
    let resultStr = Number(result).toString(2);
    while (resultStr.length < 8) resultStr = "0" + resultStr;
  
    return {
      home: parseInt(resultStr.slice(resultStr.length - 4), 2),
      away: parseInt(resultStr.slice(0, 4), 2),
    };
  }
  
  function packResults(games) {
    const ids = [];
    const results = [];
    for (let i = 0; i < games.length; i++) {
      ids.push(games[i].matchID);
      results.push(packResult(games[i].homeScoreGuess, games[i].awayScoreGuess));
    }
    return {
      ids: ids,
      results: results,
    };
  }
  
  export { unpackResult, packResults };