import GroupTable from '../components/GroupTable'
import GroupFixture from '../components/GroupFixture'
import React, { useEffect } from 'react';

export default function Group(props) {
  const matchResults = props.fixtureData.map((match) => {
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
  const CountriesFullData = props.countriesData.map((country) => {
    let wins = matchResults.filter((match)=> match.winner === country.name).length;
    let looses = matchResults.filter((match)=> match.looser === country.name).length;
    let ties = matchResults.filter((match)=> match.tie && [match.HomeTeam, match.AwayTeam].includes(country.name)).length;
    let positiveScore = matchResults.reduce((previousValue, currentMatch) => {
      if (currentMatch.HomeTeam === country.name) { 
        return previousValue + currentMatch.HomeTeamScore
      } else if (currentMatch.AwayTeam === country.name) {
        return previousValue + currentMatch.AwayTeamScore
      } else {
        return previousValue
      }
    }, 0);
    let negativeScore = matchResults.reduce((previousValue, currentMatch) => {
      if (currentMatch.HomeTeam === country.name) { 
        return previousValue + currentMatch.AwayTeamScore
      } else if (currentMatch.AwayTeam === country.name) {
        return previousValue + currentMatch.HomeTeamScore
      } else {
        return previousValue
      }
    }, 0);
    return {...country, wins, looses, ties, positiveScore, negativeScore};
  })

  useEffect(() => {
      
      console.log('RES', CountriesFullData);
    },[]);
  
  return (
        <div>
          <GroupTable title={props.group} countriesData={CountriesFullData}/>
          <GroupFixture fixtureData={props.fixtureData} countriesData={props.countriesData}/>
        </div>
  )
}