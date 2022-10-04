function GroupRow(props) {

    return (
        <tr className="h-10" name="629" >
            <td className="">{props.index}</td>
            <td align="left" className="flex gap-2 w-full my-1 items-center h-10">
                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                    <img src={props.flag} alt={`${props.countryName} flag`} className="w-14 max-h-full"/>
                </div>
                <div className="w-2/3 truncate">{props.countryName}</div>
            </td>
            <td align="center">{props.Wins*3 + props.Ties}</td>
            <td align="center">{props.Wins + props.Ties + props.Loses}</td>
            <td align="center">{props.Wins}</td>
            <td align="center">{props.Ties}</td>
            <td align="center">{props.Loses}</td>
            <td align="center">{props.goals}</td>
            <td align="center">{props.goalsReceived}</td>
            <td align="center">{(props.goals - props.goalsReceived)>0 ? `+${props.goals - props.goalsReceived}`: props.goals - props.goalsReceived}</td>
        </tr>
    );
  }

export default GroupRow;