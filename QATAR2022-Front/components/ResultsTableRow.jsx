function GroupRow(props) {

    // Captures 0x + 4 characters, then the last 4 characters.
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    /**
     * Truncates an ethereum address to the format 0x0000…0000
     * @param address Full address to truncate
     * @returns Truncated address
     */
    const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
    };

    const nickNames = [
        {address: '0xb6e2Ab44Ca614E654905C40372518343788238EA', alias: "Juankman Friedone"},
        {address: '0x1446103c5994c8a1c0dc55ab353bacec3c88a4c6', alias: "Tomson"},
        {address: '0x4e103a7aF4D148793304e317728bA0d5D5ea2a3C', alias: "El Corren"},
    ]

    const currentAlias =  nickNames.find((element) => element.address === props.address)?.alias ??  truncateEthAddress(props.address)

    return (
        <tr className={`${props.currentPlayer? 'bg-qatarSilver text-qatarRed' :''} h-10 w-full`}>
            <td align="center" className="w-1/5">{props.index+1}</td>
            <td align="center" className="w-3/5 truncate">
                <div className="w-full truncate">
                    {currentAlias}
                </div>
            </td>
            <td align="center" className="w-1/5">{props.score}</td>
        </tr>
    );
  }

export default GroupRow;

