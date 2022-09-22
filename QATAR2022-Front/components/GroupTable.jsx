
import GroupTableRow from './GroupTableRow'

function Group(props) {

    return (
            <div className="m-4 sm:m-8">
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
                        {props.countriesData.map((country, index) =>
                             <GroupTableRow
                                key={country+index}
                                index={index+1} 
                                Wins={3} 
                                Ties={2} 
                                Loses={1} 
                                countryName={country.name} 
                                flag={country.flag} 
                                goals={12} 
                                goalsReceived={7}/>
                        )}  
                    </tbody>
                </table>
            </div>
    );
  }

export default Group;