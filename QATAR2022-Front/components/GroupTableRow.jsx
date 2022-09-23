function GroupRow(props) {

    return (
        <tr className="h-10" name="629" >
            <td className="">{props.index}</td>
            <td align="left" className="flex gap-2 w-1/6 whitespace-nowrap mt-2">
                <img src={props.flag} alt={`${props.countryName} flag`} className=""/>
                <div>{props.countryName}</div>
            </td>
            <td>{props.Wins*3 + props.Ties}</td>
            <td>{props.Wins + props.Ties + props.Loses}</td>
            <td>{props.Wins}</td>
            <td>{props.Ties}</td>
            <td>{props.Loses}</td>
            <td>{props.goals}</td>
            <td>{props.goalsReceived}</td>
            <td>{(props.goals - props.goalsReceived)>0 ? `+${props.goals - props.goalsReceived}`: props.goals - props.goalsReceived}</td>
        </tr>
    );
  }

export default GroupRow;