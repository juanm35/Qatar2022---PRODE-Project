function ProdeMatchRow(props) {
    const matchDate = new Date(props.match.DateUtc)
    const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    return (
        <div className="">
            <div align="center"> {`Partido N° ${props.match.MatchNumber}`}</div>
            <div align="center"> {`${days[matchDate.getDay()]} ${matchDate.getDate()}/${matchDate.getMonth()+1}, ${matchDate.getHours()}:00`}</div>
            <div className="flex my-2 mx-8">
                <div align="center" className="flex w-2/5">
                    <img src={props.homeFlag} className="w-8 h-6 mr-2 sm:mr-4 md:mr-1 lg:mr-4"/>
                    <div className="ml-0 mr-auto">{props.match.HomeTeam.toUpperCase().slice(0,3)}</div>
                </div>
                <div align="center" className="w-1/5 bg-white flex justify-center gap-1 sm:gap-2 md:gap-1 xl:gap-4"><input type="number" min="0" className="w-12 text-center"/><span>-</span><input type="number" min="0" className="w-12 text-center"/></div>
                <div align="center" className="flex w-2/5">
                    <div className="mr-0 ml-auto">{props.match.AwayTeam.toUpperCase().slice(0,3)}</div>
                    <img src={props.awayFlag} className="w-8 h-6 ml-2 sm:ml-4 md:ml-1 lg:ml-4"/>
                </div>
            </div>
            <hr className="border-gray-300 my-2"></hr>
        </div>
    );
  }

export default ProdeMatchRow;