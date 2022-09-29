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
            <div className="text-black px-0 py-4 w-11/12 sm:w-4/5 lg:w-3/5 mx-auto md:px-8 bg-qatarSilver border rounded-lg hover:shadow-3xl my-8">
                <div align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto text-2xl text-black font-bold">{props.title}</div>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col items-center md:flex-row gap-4 justify-center my-2 '>
                        <div onClick={handleOrderDateClick} align="center" className='bg-qatarSilver p-2 text-qatarRed shadow-xl border-2 border-solid hover:bg-qatarRed hover:text-white rounded-lg cursor-pointer w-11/12 sm:w-1/4'>Por dia y hora</div>
                        <div onClick={handleOrderMatchClick} align="center" className='bg-qatarSilver p-2 text-qatarRed shadow-xl border-2 border-solid hover:bg-qatarRed hover:text-white rounded-lg cursor-pointer w-11/12 sm:w-1/4'>Por n° partido</div>
                    </div>
                </div>
                {sortedGroupPhaseMatches.map((match,index) => 
                    <div key={`Match${index}`} className="py-2">
                        <ProdeMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0].flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0].flag} topBar={index === 0? true : false}/>
                    </div>
                    )}
            </div>
    );
  }

export default ProdeRoundCard;