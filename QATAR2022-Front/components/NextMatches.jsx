import NextMatchCard from './NextMatchCard'
import React, { useState, useEffect} from 'react';
import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import {eliminationPhaseMatchFixture} from '../data/fixtureData.js'

function NextMatches(props) {  
    // const nextMatches = Fixture.data.filter((match) => (Date.parse(match.DateUtc)-Date.now())<1800000 && Date.parse(match.DateUtc)>(Date.now()-86400000));
    const nextMatches = Fixture.data.filter((match) => match.RoundNumber < 4)
    // const nextMatches2ndPhase = eliminationPhaseMatchFixture.filter((match) => (Date.parse(match.DateUtc)-Date.now())<1800000 && Date.parse(match.DateUtc)>(Date.now()-86400000))
    const nextMatches2ndPhase = eliminationPhaseMatchFixture
    useEffect(() => console.log("TEST", nextMatches, "Test 2nd phase", nextMatches2ndPhase),[])
    
    return (
            <div>
                <NextMatchCard matches={nextMatches2ndPhase} countriesData={Countries} title="&#9917; PRONÓSTICOS SEGUNDA FASE &#9917;"/>
                <NextMatchCard matches={nextMatches} countriesData={Countries} title="&#9917; PRONÓSTICOS GRUPOS &#9917;"/>
            </div>
    );
  }

export default NextMatches;