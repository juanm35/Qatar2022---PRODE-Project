
import React, { useState } from 'react';
import FixtureRow from './FixtureRow'

function MatchCard(props) {
    const [showCard, setShowCard] = useState(false);  

    function handleCardClick() {
        setShowCard(!showCard)
    }

    return (
            <div className="text-black w-full p-2 bg-qatarSilver border rounded-lg hover:shadow-3xl">
                <div onClick={handleCardClick} align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto text-lg">{props.title.toUpperCase()}</div>
                    <img align="center" src="/down-arrow.svg" className="w-3"/>
                </div>
                {showCard?
                    props.roundMatches.map((match,index) => 
                    <div key={`Match${index}`}>
                        <FixtureRow match={match} homeFlag={props.countriesData.filter((country) => country.name === match.HomeTeam)[0].flag} awayFlag={props.countriesData.filter((country) => country.name === match.AwayTeam)[0].flag}/>
                    </div>
                    )
                :<div></div>}
            </div>
    );
  }

export default MatchCard;