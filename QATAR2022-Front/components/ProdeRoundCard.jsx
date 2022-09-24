import ProdeMatchRow from './ProdeMatchRow'

import React, { useState } from 'react';

function ProdeRoundCard(props) {
    const groupPhaseMatches = props.matches.filter((match) => match.Group)
    function compareMatchNumber(a, b) {
        return a.MatchNumber - b.MatchNumber;
    }
    function compareMatchDate(a, b) {
        let dateA = new Date(a.DateUtc)
        let dateB = new Date(b.DateUtc)
        return dateA - dateB;
    }
    const [defaultOrder, setDefaultOrder] = useState(true);  

    function handleOrderDateClick() {
        setDefaultOrder(true)
    }
    function handleOrderMatchClick() {
        setDefaultOrder(false)
    }

    let sortedGroupPhaseMatches = defaultOrder? groupPhaseMatches.sort(compareMatchDate) : groupPhaseMatches.sort(compareMatchNumber); 
    
    return (
            <div className="text-black w-3/5 mx-auto p-2 bg-qatarSilver border rounded-lg hover:shadow-3xl my-8">
                <div align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto text-xl text-qatarRed">{props.title}</div>
                </div>
                <div className='my-4'>
                    <span className='flex items-center justify-center text-qatarGold font-bold'>Ordenar: </span>
                    <div className='flex gap-4 justify-center my-2 mx-32'>
                        <div onClick={handleOrderDateClick} align="center" className='bg-qatarDarkBlue p-2 text-white rounded-lg cursor-pointer w-1/2'>Por dia y hora</div>
                        <div onClick={handleOrderMatchClick} align="center" className='bg-qatarDarkBlue p-2 text-white rounded-lg cursor-pointer w-1/2'>Por n° partido</div>
                    </div>
                </div>
                {sortedGroupPhaseMatches.map((match,index) => 
                    <div key={`Match${index}`}>
                        <ProdeMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0].flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0].flag}/>
                    </div>
                    )}
            </div>
    );
  }

export default ProdeRoundCard;