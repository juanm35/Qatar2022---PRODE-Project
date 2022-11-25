import NextMatchRow from './NextMatchRow'
import PlayersTable from './PlayersTable'
import React, { useState, useEffect} from 'react';

function NextMatchCard(props) {
    function compareMatchDate(a, b) {
        let dateA = new Date(a.DateUtc)
        let dateB = new Date(b.DateUtc)
        return dateB - dateA;
    }
    let sortedMatches = props.matches.sort(compareMatchDate)
    
     const [showCard, setShowCard] = useState(false);  

     function handleCardClick() {
         setShowCard(!showCard)
     }
     useEffect (() => {
         setShowCard(false)
     },[])

    
    return (
            <div className="text-black px-0 py-4 w-11/12 sm:w-4/5 md:w-11/12 lg:w-4/5 mx-auto md:px-8 bg-qatarSilver border rounded-lg hover:shadow-3xl my-8">
                <div onClick={handleCardClick} align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto my-4 text-2xl sm:text-3xl md:text-4xl text-qatarRed font-bold sm:flex sm:gap-2 lg:gap-4"><div>&#9917; ÚLTIMOS</div><div>PRONÓSTICOS &#9917;</div></div>
                </div>
                 {showCard? 
                <div className={`grid grid-cols-1 ${sortedMatches.length>1?"md:grid-cols-2":'md:px-20'}`}>
                    {sortedMatches.map((match,index) => 
                        <div key={`Match${index}-${props.title}-${match.MatchNumber}`} className="hover:shadow-xl border-2 border-gray-200 rounded-xl border-solid py-2 ">
                            <NextMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0]?.flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0]?.flag} topBar={index === 0? true : false}/>
                            <PlayersTable match={match}/>
                        </div>
                        )}
                 </div>:
                <div></div>}
            </div>
    );
  }

export default NextMatchCard;