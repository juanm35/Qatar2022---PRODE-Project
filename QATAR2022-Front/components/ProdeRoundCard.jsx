import ProdeMatchRow from './ProdeMatchRow'
import React, { useState, useEffect} from 'react';

function ProdeRoundCard(props) {
    function compareMatchDate(a, b) {
        let dateA = new Date(a.DateUtc)
        let dateB = new Date(b.DateUtc)
        return dateA - dateB;
    }
    let sortedMatches = props.matches.sort(compareMatchDate)
    
    const [showCard, setShowCard] = useState(true);  

    function handleCardClick() {
        if(props.phase === "FINISHED"){
        setShowCard(!showCard)
    }
    }
    useEffect (() => {
        if(props.phase === "FINISHED"){
            setShowCard(false)
        } 
    },[])

    
    return (
            <div onClick={handleCardClick} className={`text-black px-0 py-4 w-11/12 sm:w-4/5 md:w-11/12 lg:w-4/5 mx-auto md:px-8 bg-qatarSilver border rounded-lg hover:shadow-3xl my-8 ${props.phase === "FINISHED"? "cursor-pointer" : ''}`}>
                <div align="center" className="flex px-2">
                    <div align="center" className="m-auto my-4 text-3xl md:text-4xl text-black font-bold">{props.title}</div>
                </div>
                 {showCard?
                <div className={`grid grid-cols-1 ${!props.center?"md:grid-cols-2":'md:px-20'}`}>
                    {sortedMatches.map((match,index) => 
                        <div key={`Match${index}-${props.title}-${match.MatchNumber}`} className="py-2">
                            <ProdeMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0]?.flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0]?.flag} topBar={index === 0? true : false} updateGuess={props.updateGuess} userCurrentMatchGuess={props.userCurrentGuess[match.MatchNumber-1]} disableInput={props.disableInput}/>
                        </div>
                        )}
                 </div>:
                <div></div>}
            </div>
    );
  }

export default ProdeRoundCard;