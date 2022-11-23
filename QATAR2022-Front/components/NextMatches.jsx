import NextMatchCard from './NextMatchCard'
import React, { useState, useEffect} from 'react';
import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'

function NextMatches(props) {  
    const nextMatches = Fixture.data.filter((match) => (Date.parse(match.DateUtc)-Date.now())<1800000 && Date.parse(match.DateUtc)>(Date.now()-86400000))
    useEffect(() => console.log("TEST", nextMatches),[])
    
    return (
            <div>
                <NextMatchCard matches={nextMatches} countriesData={Countries} title="&#9917; ÚLTIMOS PRONÓSTICOS &#9917;"/>
            </div>
    );
  }

export default NextMatches;