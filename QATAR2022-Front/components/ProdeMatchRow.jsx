import { useEffect, useState } from 'react';

function ProdeMatchRow(props) {
    const matchDate = new Date(props.match.DateUtc.replace(" ", "T"))
    const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    const translateGroup = {
        groupA: "Grupo A",
        groupB: "Grupo B",
        groupC: "Grupo C",
        groupD: "Grupo D",
        groupE: "Grupo E",
        groupF: "Grupo F",
        groupG: "Grupo G",
        groupH: "Grupo H",
        '8vosFinal': "Octavos de Final",
        QuarterFinal: "Cuartos de Final",
        SemiFinal: "Semi Final",
        Final: "Final",
        '3rdAnd4th': "Tercer y Cuarto Puesto"
    }
    const [input, setInput] = useState({"matchID": props.match.MatchNumber, "homeScoreGuess": props?.homeScoreGuess ?? '', "awayScoreGuess": props?.homeScoreGuess ?? ''});
    useEffect(() => {
        props.updateGuess(input), [input]
      });
    return (
        <div className="hover:shadow-xl border-2 border-gray-200 rounded-xl border-solid py-2 md:py-8 mx-2 sm:mx-4">
            {/* <div align="center" className="text-lg"> <strong>{`Partido N° ${props.match.MatchNumber}`}</strong></div> */}
            <div align="center" className="text-lg"><strong>{translateGroup[`${props.match.Group}`]}</strong></div>
            <div align="center"><em>{props.match.Location}</em></div>
            <div align="center"> {`${days[matchDate.getDay()]} ${matchDate.getDate()}/${matchDate.getMonth()+1}, ${matchDate.getHours()}:00`}</div>
            <div className="flex my-2 mx-2 lg:mx-8">
                <div align="center" className="flex w-2/5">
                    {props.homeFlag?
                    <img src={props.homeFlag} className="w-6 lg:w-8 h-6 mr-2 sm:mr-4 md:mr-1 lg:mr-4"/> :
                    <div className="w-6 lg:w-8 h-6 mr-2 sm:mr-4 md:mr-1 lg:mr-4 bg-gray-600 text-white">?</div> }
                    <div className="ml-0 mr-auto">{props.match.HomeTeam.toUpperCase().slice(0,3)}</div>
                </div>
                <div align="center" className="w-1/5 bg-white flex justify-center sm:gap-2 md:gap-1 ">
                    <input disabled={props.disableInput} type="number" placeholder={`${props.userCurrentMatchGuess?.home}`} value={input.homeScoreGuess} min="0" max="15" className={`${props.disableInput? "bg-gray-200" : ''} w-12 text-center text-qatarRed`} onInput={e => setInput(
                        prevState => ({
                            ...prevState,
                            ["homeScoreGuess"]: e.target.value*1
                        })
                    )}/>
                    <span className="border-solid border-2 px-2">-</span>
                    <input disabled={props.disableInput} type="number" placeholder={props.userCurrentMatchGuess?.away} value={input.awayScoreGuess} min="0" max="15" className={`${props.disableInput? "bg-gray-200" : ''} w-12 text-center text-qatarRed`} onInput={e => setInput(
                        prevState => ({
                            ...prevState,
                            ["awayScoreGuess"]: e.target.value*1
                        })
                    )}/>
                </div>
                <div align="center" className="flex w-2/5">
                    <div className="mr-0 ml-auto">{props.match.AwayTeam.toUpperCase().slice(0,3)}</div>
                    {props.awayFlag?
                    <img src={props.awayFlag} className="w-6 lg:w-8 h-6 ml-2 sm:ml-4 md:ml-1 lg:ml-4"/>:
                    <div className="w-6 lg:w-8 h-6 ml-2 sm:ml-4 md:ml-1 lg:ml-4 bg-gray-600 text-white">?</div> }
                </div>
            </div>
        </div>
    );
  }

export default ProdeMatchRow;