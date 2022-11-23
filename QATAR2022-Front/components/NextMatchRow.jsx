import { useEffect, useState } from 'react';

function NextMatchRow(props) {
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
    }
    return (
        <div className="hover:shadow-xl border-2 border-gray-200 rounded-xl border-solid py-2 md:py-2 mx-2 sm:mx-4 bg-qatarSilver">
            {/* <div align="center" className="text-lg"> <strong>{`Partido N° ${props.match.MatchNumber}`}</strong></div> */}
            <div align="center" className="text-lg"><strong>{translateGroup[`${props.match.Group}`]}</strong></div>
            <div align="center"><em>{props.match.Location}</em></div>
            <div align="center"> {`${days[matchDate.getDay()]} ${matchDate.getDate()}/${matchDate.getMonth()+1}, ${matchDate.getHours()}:00`}</div>
            <div className="flex my-2 mx-2 lg:mx-8 justify-center gap-2">
                <div align="center" className="flex">
                    {props.homeFlag?
                    <img src={props.homeFlag} className="w-6 lg:w-8 h-6 mr-2 sm:mr-4 md:mr-1 lg:mr-4"/> :
                    <div className="w-6 lg:w-8 h-6 mr-2 sm:mr-4 md:mr-1 lg:mr-4 bg-gray-600 text-white">?</div> }
                    <div className="ml-0 mr-auto">{props.match.HomeTeam.toUpperCase().slice(0,3)}</div>
                </div>
                <div className='text-qatarRed'>VS</div>
                <div align="center" className="flex">
                    <div className="mr-0 ml-auto">{props.match.AwayTeam.toUpperCase().slice(0,3)}</div>
                    {props.awayFlag?
                    <img src={props.awayFlag} className="w-6 lg:w-8 h-6 ml-2 sm:ml-4 md:ml-1 lg:ml-4"/>:
                    <div className="w-6 lg:w-8 h-6 ml-2 sm:ml-4 md:ml-1 lg:ml-4 bg-gray-600 text-white">?</div> }
                </div>
            </div>
        </div>
    );
  }

export default NextMatchRow;