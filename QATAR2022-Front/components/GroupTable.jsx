
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
            <div className="mx-0 my-4 sm:mx-4 md:mx-1 lg:mx-2 lg:my-8 xl:mx-6 bg-transparent/[0.6] sm:rounded-xl pt-0 pr-2.5 pb-5 pl-2 md:pr-2 lg:pl-6 lg:pr-2.5" >
                <div className="text-white text-xl flex justify-center"> <strong className='my-3 sm:my-5 md:my-3 lg:my-5'>{props.title}</strong> </div>
                <table id="" className="text-white mx-auto w-full">
                    <thead>
                        <tr>
                            <th align="left">#</th>
                            <th className="w-2/5">Equipo</th>
                            <th align="center" className="">Pts</th>
                            <th align="center" className="">PJ</th>
                            <th align="center" className="">PG</th>
                            <th align="center" className="">PE</th>
                            <th align="center" className="">PP</th>
                            <th align="center" className="">GF</th>
                            <th align="center" className="">GC</th>
                            <th align="center" className="">DIF</th>
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