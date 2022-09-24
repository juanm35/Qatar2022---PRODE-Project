import ProdeMatchRow from './ProdeMatchRow'

function ProdeRoundCard(props) {
    const groupPhaseMatches = props.matches.filter((match) => match.Group)
    return (
            <div className="text-black w-3/5 mx-auto p-2 bg-qatarSilver border rounded-lg hover:shadow-3xl">
                <div align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto">{props.title}</div>
                </div>
                {groupPhaseMatches.map((match,index) => 
                    <div key={`Match${index}`}>
                        <ProdeMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0].flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0].flag}/>
                    </div>
                    )}
            </div>
    );
  }

export default ProdeRoundCard;