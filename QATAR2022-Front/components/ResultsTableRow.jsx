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
        {address: '0xb6e2Ab44Ca614E654905C40372518343788238EA', alias: "Juankman Friedone (Juan M)"},
        {address: '0x1446103C5994c8a1c0DC55aB353BacEC3C88A4c6', alias: "The Graph boy (Tomi M)"},
        {address: '0x4e103a7aF4D148793304e317728bA0d5D5ea2a3C', alias: "KYC Degen (Corren)"},
        {address: '0x168f6572cD792102082BB8536D50ad5d7CD95943', alias: "King POAP (Nacho G)"},
        {address: '0x551D7732A5b0Da697aDE54231B204780C17feC56', alias: "Federik Buterin (Fede R)"},
        {address: '0x881B0bD38A37Bd3d9Ca7D0a49a8C51278A64215B', alias: "Elon Mosq (Nico M)"},
        {address: '0x8537487a26ed8E502492A7a905C83466bb7E8293', alias: "Frodoneta (Tomas S)"},
        {address: '0xa97C676B71e1200D712f5F1e3b93E81daEAE51F5', alias: "The Chalo (Gonzo E)"},
        {address: '0x50427f59edf8d5A26cD6cF45B8f512115BCc5FF1', alias: "Zlataitan (Tito Z)"},
        {address: '0x90b99EA336bB4d6EAD1a409036e6e2ae8e44eF3C', alias: "Fürer Mike (Pigue)"},
        {address: '0xeB13FD078AB234737cC8621Be00F007cA35bB3c3', alias: "Eth Addict (Pedro B)"},
        {address: '0x403E66Eab56b466C2F10186D8e67aF715181a74a', alias: "Incognito User (El Aguila)"}
        

    ]

    const currentAlias =  nickNames.find((element) => element.address === props.address)?.alias ??  truncateEthAddress(props.address)

    return (
        <tr className={`${props.currentPlayer? 'bg-qatarSilver text-qatarRed' :''} h-10 w-full`}>
            <td align="center" className="w-1/5">{props.index+1}</td>
            <td align="center" className="w-3/5 truncate">
                <div className="w-full truncate">
                    {currentAlias}
                    {props.price === "First"? <span>&#129351;</span> : props.price === "Second"? <span>&#129352;</span> : props.price === "Third"? <span>&#129353;</span> : ''}
                </div>
            </td>
            <td align="center" className="w-1/5">{props.score}</td>
        </tr>
    );
  }

export default GroupRow;

