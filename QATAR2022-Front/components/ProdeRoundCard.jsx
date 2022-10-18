import ProdeMatchRow from './ProdeMatchRow'

function ProdeRoundCard(props) {
    const groupPhaseMatches = props.matches.filter((match) => match.Group)
    //  function compareMatchNumber(a, b) {
    //     return a.MatchNumber - b.MatchNumber;
    // }
    function compareMatchDate(a, b) {
        let dateA = new Date(a.DateUtc)
        let dateB = new Date(b.DateUtc)
        return dateA - dateB;
    }
    // const [defaultOrder, setDefaultOrder] = useState(true);  

    // function handleOrderDateClick() {
    //     setDefaultOrder(true)
    // }
    // function handleOrderMatchClick() {
    //     setDefaultOrder(false)
    // }
    let sortedGroupPhaseMatches = groupPhaseMatches.sort(compareMatchDate)
    //let sortedGroupPhaseMatches = defaultOrder? groupPhaseMatches.sort(compareMatchDate) : groupPhaseMatches.sort(compareMatchNumber); 

    
    return (
            <div className="text-black px-0 py-4 w-11/12 sm:w-4/5 md:w-11/12 lg:w-4/5 mx-auto md:px-8 bg-qatarSilver border rounded-lg hover:shadow-3xl my-8">
                <div align="center" className="flex px-2 cursor-pointer">
                    <div align="center" className="m-auto mt-4 text-3xl md:text-4xl text-black font-bold">{props.title}</div>
                </div>
                {/* <div className='my-4'>
                    <div className='flex flex-col items-center md:flex-row gap-4 justify-center my-2 '>
                        <div onClick={handleOrderDateClick} align="center" className='bg-qatarSilver p-2 text-qatarRed shadow-xl border-2 border-solid border-gray-200 hover:bg-qatarRed hover:text-white rounded-lg cursor-pointer w-11/12 sm:w-1/4'>Por dia y hora</div>
                        <div onClick={handleOrderMatchClick} align="center" className='bg-qatarSilver p-2 text-qatarRed shadow-xl border-2 border-solid border-gray-200 hover:bg-qatarRed hover:text-white rounded-lg cursor-pointer w-11/12 sm:w-1/4'>Por n° partido</div>
                    </div>
                </div> */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {sortedGroupPhaseMatches.map((match,index) => 
                        <div key={`Match${index}`} className="py-2">
                            <ProdeMatchRow match={match} homeFlag={props.countriesData[`${match.Group}`].filter((country) => country.name === match.HomeTeam)[0].flag} awayFlag={props.countriesData[match.Group].filter((country) => country.name === match.AwayTeam)[0].flag} topBar={index === 0? true : false} updateGuess={props.updateGuess}/>
                        </div>
                        )}
                </div>
            </div>
    );
  }

export default ProdeRoundCard;