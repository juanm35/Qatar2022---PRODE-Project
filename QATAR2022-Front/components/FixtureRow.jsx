

function MatchCard(props) {
    const matchDate = new Date(props.match.DateUtc)
    const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    return (
        <div className="">
            <hr className="border-gray-300 my-2"></hr>
            <div align="center"> {`${days[matchDate.getDay()]} ${matchDate.getDate()}/${matchDate.getMonth()+1}, ${matchDate.getHours()}:00`}</div>
            <div className="flex my-2 mx-8">
                <div align="center" className="flex w-2/5">
                    <img src={props.homeFlag} className="w-8 h-6 mr-4"/>
                    <div className="ml-0 mr-auto">{props.match.HomeTeam.toUpperCase().slice(0,3)}</div>
                </div>
                <div align="center" className="w-1/5 bg-white"> - </div>
                <div align="center" className="flex w-2/5">
                    <div className="mr-0 ml-auto">{props.match.AwayTeam.toUpperCase().slice(0,3)}</div>
                    <img src={props.awayFlag} className="w-8 h-6 ml-4"/>
                </div>
            </div>
        </div>
    );
  }

export default MatchCard;