
import GroupTableRow from './GroupTableRow'

function Group(props) {
    function comparePoints(a, b) {
        return (b.wins*3+b.ties) - (a.wins*3+a.ties);
    }
    function compareScoreDiff(a, b) {
        return (b.positiveScore-b.negativeScore) - (a.positiveScore-a.negativeScore);
    }
    function comparePositiveScore(a, b) {
        return b.positiveScore - a.positiveScore;
    }
    const orderedCountriesData = props.countriesData.sort(comparePositiveScore).sort(compareScoreDiff).sort(comparePoints)
    return (
            <div className="m-4 sm:m-8 bg-transparent/[0.6] rounded-xl pt-0 pr-2.5 pb-5 pl-6" >
                <br/>
                <div className="text-white"> {props.title} </div>
                <table id="" className="text-white">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="w-2/5">Equipo</th>
                            <th align="left" className="">Pts</th>
                            <th align="left" className="">PJ</th>
                            <th align="left" className="">PG</th>
                            <th align="left" className="">PE</th>
                            <th align="left" className="">PP</th>
                            <th align="left" className="">GF</th>
                            <th align="left" className="">GC</th>
                            <th align="left" className="">DIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderedCountriesData.map((country, index) =>
                             <GroupTableRow
                                key={country.name+index}
                                index={index+1} 
                                Wins={country.wins} 
                                Ties={country.ties} 
                                Loses={country.looses} 
                                countryName={country.name} 
                                flag={country.flag} 
                                goals={country.positiveScore} 
                                goalsReceived={country.negativeScore}/>
                        )}  
                    </tbody>
                </table>
            </div>
    );
  }

export default Group;