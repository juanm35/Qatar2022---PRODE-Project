

import Fixture from './fixtureData.json' assert { type: "json" }
import Countries from './countriesData.json' assert { type: "json" }
import {eliminationPhaseRounds} from  './seedsEliminationBracket'
//import Fixture from './testData/fixtureDataTest.json' assert { type: "json" }
//import {eliminationPhaseRounds} from  './testData/seedsEliminationBracketTest'


// Constant containing the fixture plus the winner - tie - looser properties
const matchResults = Fixture.data.map((match) => {
    if (match.HomeTeamScore === null || match.AwayTeamScore === null) {
      return {...match, winner: null, tie: null, looser: null}
    } else if(match.HomeTeamScore === match.AwayTeamScore) {
      return {...match, winner: null, tie: true, looser: null}
    } else if (match.HomeTeamScore > match.AwayTeamScore) {
      return {...match, winner: match.HomeTeam, tie: false, looser: match.AwayTeam}
    } else {
      return {...match, winner: match.AwayTeam, tie: false, looser: match.HomeTeam}
    }
  })


//  EXPORTABLE 1:  variable with all the matches data, including results, winner, tie or looser for the group phase
export const matchResultsGroupPhase = matchResults.filter((match) => match.RoundNumber < 4);

//  variable with all the matches data, including results, winner, tie or looser for the elimination phase
const matchResultsEliminationPhase = matchResults.filter((match) => match.RoundNumber > 3);



// Function for creating the stats of the countries for a given group
function createCountriesStats (countries) {
   return( 
    countries.map( (country) =>{
        let wins = matchResultsGroupPhase.filter((match)=> match.winner === country.name).length;
        let looses = matchResultsGroupPhase.filter((match)=> match.looser === country.name).length;
        let ties = matchResultsGroupPhase.filter((match)=> match.tie && [match.HomeTeam, match.AwayTeam].includes(country.name)).length;
        let positiveScore = matchResultsGroupPhase.reduce((previousValue, currentMatch) => {
            if (currentMatch.HomeTeam === country.name) { 
            return previousValue + currentMatch.HomeTeamScore
            } else if (currentMatch.AwayTeam === country.name) {
            return previousValue + currentMatch.AwayTeamScore
            } else {
            return previousValue
            }
        }, 0);
        let negativeScore = matchResultsGroupPhase.reduce((previousValue, currentMatch) => {
            if (currentMatch.HomeTeam === country.name) { 
            return previousValue + currentMatch.AwayTeamScore
            } else if (currentMatch.AwayTeam === country.name) {
            return previousValue + currentMatch.HomeTeamScore
            } else {
            return previousValue
            }
        }, 0);
    return {...country, wins, looses, ties, positiveScore, negativeScore};
    } ))}

// Functions for sorting teams on group table first by points, then by score difference and then by positive score
function comparePoints(a, b) {
    return (b.wins*3+b.ties) - (a.wins*3+a.ties);
}
function compareScoreDiff(a, b) {
    return (b.positiveScore-b.negativeScore) - (a.positiveScore-a.negativeScore);
}
function comparePositiveScore(a, b) {
    return b.positiveScore - a.positiveScore;
}


// EXPORTABLE 2: Countries stats of the group fase, already sorted by specified criteria.
export const countriesStats = {
    groupA: createCountriesStats(Countries.groupA).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupB: createCountriesStats(Countries.groupB).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupC: createCountriesStats(Countries.groupC).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupD: createCountriesStats(Countries.groupD).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupE: createCountriesStats(Countries.groupE).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupF: createCountriesStats(Countries.groupF).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupG: createCountriesStats(Countries.groupG).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
    groupH: createCountriesStats(Countries.groupH).sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints),
}






//// **************************************************ELIMINATION PHASE *****************************************************************
let eliminationPhaseFixture = matchResultsEliminationPhase
console.log("elimination", eliminationPhaseFixture)

// Setting 8vos finals
  // GRUPO A
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[0].teams[0].name = countriesStats.groupA[0].name;
    eliminationPhaseRounds[0].seeds[4].teams[1].name = countriesStats.groupA[1].name;
    eliminationPhaseRounds[0].seeds[0].teams[0].flag = countriesStats.groupA[0].flag;
    eliminationPhaseRounds[0].seeds[4].teams[1].flag = countriesStats.groupA[1].flag;

    // Setting fixture for miProde cards
    eliminationPhaseFixture[0].HomeTeam = countriesStats.groupA[0].name
    eliminationPhaseFixture[4].AwayTeam = countriesStats.groupA[1].name

    
  
  
  // Grupo B
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[4].teams[0].name = countriesStats.groupB[0].name;
    eliminationPhaseRounds[0].seeds[0].teams[1].name = countriesStats.groupB[1].name;
    eliminationPhaseRounds[0].seeds[4].teams[0].flag = countriesStats.groupB[0].flag;
    eliminationPhaseRounds[0].seeds[0].teams[1].flag = countriesStats.groupB[1].flag;

    // Setting fixture for miProde cards    
    eliminationPhaseFixture[4].HomeTeam = countriesStats.groupB[0].name
    eliminationPhaseFixture[0].AwayTeam = countriesStats.groupB[1].name
  
  // Grupo C
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[1].teams[0].name = countriesStats.groupC[0].name;
    eliminationPhaseRounds[0].seeds[5].teams[1].name = countriesStats.groupC[1].name;
    eliminationPhaseRounds[0].seeds[1].teams[0].flag = countriesStats.groupC[0].flag;
    eliminationPhaseRounds[0].seeds[5].teams[1].flag = countriesStats.groupC[1].flag;

    // Setting fixture for miProde cards
    eliminationPhaseFixture[1].HomeTeam = countriesStats.groupC[0].name
    eliminationPhaseFixture[5].AwayTeam = countriesStats.groupC[1].name
  
  // Grupo D
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[1].teams[1].name = countriesStats.groupD[1].name;
    eliminationPhaseRounds[0].seeds[5].teams[0].name = countriesStats.groupD[0].name;
    eliminationPhaseRounds[0].seeds[1].teams[1].flag = countriesStats.groupD[1].flag;
    eliminationPhaseRounds[0].seeds[5].teams[0].flag = countriesStats.groupD[0].flag;

    // Setting fixture for miProde cards
    eliminationPhaseFixture[5].HomeTeam = countriesStats.groupD[0].name
    eliminationPhaseFixture[1].AwayTeam = countriesStats.groupD[1].name
  
  // Grupo E
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[2].teams[0].name = countriesStats.groupE[0].name;
    eliminationPhaseRounds[0].seeds[6].teams[1].name = countriesStats.groupE[1].name;
    eliminationPhaseRounds[0].seeds[2].teams[0].flag = countriesStats.groupE[0].flag;
    eliminationPhaseRounds[0].seeds[6].teams[1].flag = countriesStats.groupE[1].flag;

    // Setting fixture for miProde cards  

    eliminationPhaseFixture[2].HomeTeam = countriesStats.groupE[0].name;
    eliminationPhaseFixture[6].AwayTeam = countriesStats.groupE[1].name;

  // Grupo F
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[2].teams[1].name = countriesStats.groupF[1].name;
    eliminationPhaseRounds[0].seeds[6].teams[0].name = countriesStats.groupF[0].name;
    eliminationPhaseRounds[0].seeds[2].teams[1].flag = countriesStats.groupF[1].flag;
    eliminationPhaseRounds[0].seeds[6].teams[0].flag = countriesStats.groupF[0].flag;

    // Setting fixture for miProde cards  
    eliminationPhaseFixture[6].HomeTeam = countriesStats.groupF[0].name
    eliminationPhaseFixture[2].AwayTeam = countriesStats.groupF[1].name


  // Grupo G
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[3].teams[0].name = countriesStats.groupG[0].name;
    eliminationPhaseRounds[0].seeds[7].teams[1].name = countriesStats.groupG[1].name;
    eliminationPhaseRounds[0].seeds[3].teams[0].flag = countriesStats.groupG[0].flag;
    eliminationPhaseRounds[0].seeds[7].teams[1].flag = countriesStats.groupG[1].flag;

    // Setting fixture for miProde cards
    eliminationPhaseFixture[3].HomeTeam = countriesStats.groupG[0].name
    eliminationPhaseFixture[7].AwayTeam = countriesStats.groupG[1].name
  
  // Grupo H
    // Setting seed for tournament brackets
    eliminationPhaseRounds[0].seeds[3].teams[1].name = countriesStats.groupH[1].name;
    eliminationPhaseRounds[0].seeds[7].teams[0].name = countriesStats.groupH[0].name;
    eliminationPhaseRounds[0].seeds[3].teams[1].flag = countriesStats.groupH[1].flag;
    eliminationPhaseRounds[0].seeds[7].teams[0].flag = countriesStats.groupH[0].flag;

    // Setting fixture for miProde cards  
    eliminationPhaseFixture[7].HomeTeam = countriesStats.groupH[0].name
    eliminationPhaseFixture[3].AwayTeam = countriesStats.groupH[1].name
  
  // Setting Qater finals
  const match8vos1 = eliminationPhaseRounds[0].seeds[0]
  const match8vos2 = eliminationPhaseRounds[0].seeds[1]
  const match8vos3 = eliminationPhaseRounds[0].seeds[2]
  const match8vos4 = eliminationPhaseRounds[0].seeds[3]
  const match8vos5 = eliminationPhaseRounds[0].seeds[4]
  const match8vos6 = eliminationPhaseRounds[0].seeds[5]
  const match8vos7 = eliminationPhaseRounds[0].seeds[6]
  const match8vos8 = eliminationPhaseRounds[0].seeds[7]
  if((match8vos1.score.home > match8vos1.score.away || match8vos1.penalties.home > match8vos1.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[0].teams[0].name = match8vos1.teams[0].name
    eliminationPhaseRounds[1].seeds[0].teams[0].flag = match8vos1.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[8].HomeTeam = match8vos1.teams[0].name
  } else if ((match8vos1.score.home < match8vos1.score.away || match8vos1.penalties.home < match8vos1.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[0].teams[0].name = match8vos1.teams[1].name
    eliminationPhaseRounds[1].seeds[0].teams[0].flag = match8vos1.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[8].HomeTeam = match8vos1.teams[1].name
  }
  if((match8vos2.score.home > match8vos2.score.away || match8vos2.penalties.home > match8vos2.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[0].teams[1].name = match8vos2.teams[0].name
    eliminationPhaseRounds[1].seeds[0].teams[1].flag = match8vos2.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[8].AwayTeam = match8vos2.teams[0].name
  } else if ((match8vos2.score.home < match8vos2.score.away || match8vos2.penalties.home < match8vos2.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[0].teams[1].name = match8vos2.teams[1].name
    eliminationPhaseRounds[1].seeds[0].teams[1].flag = match8vos2.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[8].AwayTeam = match8vos2.teams[1].name
  }
  if((match8vos3.score.home > match8vos3.score.away || match8vos3.penalties.home > match8vos3.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[1].teams[0].name = match8vos3.teams[0].name
    eliminationPhaseRounds[1].seeds[1].teams[0].flag = match8vos3.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[9].HomeTeam = match8vos3.teams[0].name
  } else if ((match8vos3.score.home < match8vos3.score.away || match8vos3.penalties.home < match8vos3.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[1].teams[0].name = match8vos3.teams[1].name
    eliminationPhaseRounds[1].seeds[1].teams[0].flag = match8vos3.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[9].HomeTeam = match8vos3.teams[1].name
  }
  if((match8vos4.score.home > match8vos4.score.away || match8vos4.penalties.home > match8vos4.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[1].teams[1].name = match8vos4.teams[0].name
    eliminationPhaseRounds[1].seeds[1].teams[1].flag = match8vos4.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[9].AwayTeam = match8vos4.teams[0].name
  } else if ((match8vos4.score.home < match8vos4.score.away || match8vos4.penalties.home < match8vos4.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[1].teams[1].name = match8vos4.teams[1].name
    eliminationPhaseRounds[1].seeds[1].teams[1].flag = match8vos4.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[9].AwayTeam = match8vos4.teams[1].name
  }
  if((match8vos5.score.home > match8vos5.score.away || match8vos5.penalties.home > match8vos5.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[2].teams[0].name = match8vos5.teams[0].name
    eliminationPhaseRounds[1].seeds[2].teams[0].flag = match8vos5.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[10].HomeTeam = match8vos5.teams[0].name
  } else if ((match8vos5.score.home < match8vos5.score.away || match8vos5.penalties.home < match8vos5.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[2].teams[0].name = match8vos5.teams[1].name
    eliminationPhaseRounds[1].seeds[2].teams[0].flag = match8vos5.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[10].HomeTeam = match8vos5.teams[1].name
  }
  if((match8vos6.score.home > match8vos6.score.away || match8vos6.penalties.home > match8vos6.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[2].teams[1].name = match8vos6.teams[0].name
    eliminationPhaseRounds[1].seeds[2].teams[1].flag = match8vos6.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[10].AwayTeam = match8vos6.teams[0].name
  } else if ((match8vos6.score.home < match8vos6.score.away || match8vos6.penalties.home < match8vos6.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[2].teams[1].name = match8vos6.teams[1].name
    eliminationPhaseRounds[1].seeds[2].teams[1].flag = match8vos6.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[10].AwayTeam = match8vos6.teams[1].name
  }
  if((match8vos7.score.home > match8vos7.score.away || match8vos7.penalties.home > match8vos7.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[3].teams[0].name = match8vos7.teams[0].name
    eliminationPhaseRounds[1].seeds[3].teams[0].flag = match8vos7.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[11].HomeTeam = match8vos7.teams[0].name
  } else if ((match8vos7.score.home < match8vos7.score.away || match8vos7.penalties.home < match8vos7.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[3].teams[0].name = match8vos7.teams[1].name
    eliminationPhaseRounds[1].seeds[3].teams[0].flag = match8vos7.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[11].HomeTeam = match8vos7.teams[1].name
  }
  if((match8vos8.score.home > match8vos8.score.away || match8vos8.penalties.home > match8vos8.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[3].teams[1].name = match8vos8.teams[0].name
    eliminationPhaseRounds[1].seeds[3].teams[1].flag = match8vos8.teams[0].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[11].AwayTeam = match8vos8.teams[0].name
  } else if ((match8vos8.score.home < match8vos8.score.away || match8vos8.penalties.home < match8vos8.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[3].teams[1].name = match8vos8.teams[1].name
    eliminationPhaseRounds[1].seeds[3].teams[1].flag = match8vos8.teams[1].flag
     // Setting fixture for miProde cards 
    eliminationPhaseFixture[11].AwayTeam = match8vos8.teams[1].name
  }
  
  // Setting Semi Finals
  const matchQ1 = eliminationPhaseRounds[1].seeds[0]
  const matchQ2 = eliminationPhaseRounds[1].seeds[1]
  const matchQ3 = eliminationPhaseRounds[1].seeds[2]
  const matchQ4 = eliminationPhaseRounds[1].seeds[3]
  if((matchQ1.score.home > matchQ1.score.away || matchQ1.penalties.home > matchQ1.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[0].teams[0].name = matchQ1.teams[0].name
    eliminationPhaseRounds[2].seeds[0].teams[0].flag = matchQ1.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[12].HomeTeam = matchQ1.teams[0].name
  } else if ((matchQ1.score.home < matchQ1.score.away || matchQ1.penalties.home < matchQ1.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[0].teams[0].name = matchQ1.teams[1].name
    eliminationPhaseRounds[2].seeds[0].teams[0].flag = matchQ1.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[12].HomeTeam = matchQ1.teams[1].name
  }
  if((matchQ2.score.home > matchQ2.score.away || matchQ2.penalties.home > matchQ2.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[0].teams[1].name = matchQ2.teams[0].name
    eliminationPhaseRounds[2].seeds[0].teams[1].flag = matchQ2.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[12].AwayTeam = matchQ2.teams[0].name
  } else if ((matchQ2.score.home < matchQ2.score.away || matchQ2.penalties.home < matchQ2.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[0].teams[1].name = matchQ2.teams[1].name
    eliminationPhaseRounds[2].seeds[0].teams[1].flag = matchQ2.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[12].AwayTeam = matchQ2.teams[1].name
  }
  if((matchQ3.score.home > matchQ3.score.away || matchQ3.penalties.home > matchQ3.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[1].teams[0].name = matchQ3.teams[0].name
    eliminationPhaseRounds[2].seeds[1].teams[0].flag = matchQ3.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[13].HomeTeam = matchQ3.teams[0].name
  } else if ((matchQ3.score.home < matchQ3.score.away || matchQ3.penalties.home < matchQ3.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[1].teams[0].name = matchQ3.teams[1].name
    eliminationPhaseRounds[2].seeds[1].teams[0].flag = matchQ3.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[13].HomeTeam = matchQ3.teams[1].name
  }
  if((matchQ4.score.home > matchQ4.score.away || matchQ4.penalties.home > matchQ4.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[1].teams[1].name = matchQ4.teams[0].name
    eliminationPhaseRounds[2].seeds[1].teams[1].flag = matchQ4.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[13].AwayTeam = matchQ4.teams[0].name
  } else if ((matchQ4.score.home < matchQ4.score.away || matchQ4.penalties.home < matchQ4.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[1].teams[1].name = matchQ4.teams[1].name
    eliminationPhaseRounds[2].seeds[1].teams[1].flag = matchQ4.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[13].AwayTeam = matchQ4.teams[1].name
  }


  // Setting FINAL and 3rd&4yh place match
  const matchS1 = eliminationPhaseRounds[2].seeds[0]
  const matchS2 = eliminationPhaseRounds[2].seeds[1]
  if((matchS1.score.home > matchS1.score.away || matchS1.penalties.home > matchS1.penalties.away) ?? false ) {
    eliminationPhaseRounds[3].seeds[0].teams[0].name = matchS1.teams[0].name
    eliminationPhaseRounds[3].seeds[0].teams[0].flag = matchS1.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[15].HomeTeam = matchS1.teams[0].name
    eliminationPhaseFixture[14].HomeTeam = matchS1.teams[1].name
  } else if ((matchS1.score.home < matchS1.score.away || matchS1.penalties.home < matchS1.penalties.away) ?? false) {
    eliminationPhaseRounds[3].seeds[0].teams[0].name = matchS1.teams[1].name
    eliminationPhaseRounds[3].seeds[0].teams[0].flag = matchS1.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[15].HomeTeam = matchS1.teams[1].name
    eliminationPhaseFixture[14].HomeTeam = matchS1.teams[0].name
  }
  if((matchS2.score.home > matchS2.score.away || matchS2.penalties.home > matchS2.penalties.away) ?? false ) {
    eliminationPhaseRounds[3].seeds[0].teams[1].name = matchS2.teams[0].name
    eliminationPhaseRounds[3].seeds[0].teams[1].flag = matchS2.teams[0].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[15].AwayTeam = matchS2.teams[0].name
    eliminationPhaseFixture[14].AwayTeam = matchS1.teams[1].name
  } else if ((matchS2.score.home < matchS2.score.away || matchS2.penalties.home < matchS2.penalties.away) ?? false) {
    eliminationPhaseRounds[3].seeds[0].teams[1].name = matchS2.teams[1].name
    eliminationPhaseRounds[3].seeds[0].teams[1].flag = matchS2.teams[1].flag
    // Setting fixture for miProde cards
    eliminationPhaseFixture[15].AwayTeam = matchS2.teams[1].name
    eliminationPhaseFixture[14].AwayTeam = matchS1.teams[0].name
  }


  export const seedsTournamentBrackets = eliminationPhaseRounds;
  export const eliminationPhaseMatchFixture = eliminationPhaseFixture;

