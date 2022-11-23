function PlayersTableRow(props) {

    return(
        <tr className="h-4" name="629" >
            <td align="center">{props.playerName || "Player Name"}</td>
            <td align="center">{props.homeGuess === 15 && props.awayGuess === 15 ?`Sin datos`: `${props.homeGuess} - ${props.awayGuess}`}</td>
        </tr>
    )

}

export default PlayersTableRow;
                    