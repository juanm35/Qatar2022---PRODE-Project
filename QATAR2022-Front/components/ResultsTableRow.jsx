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

    return (
        <tr className="h-10 w-full">
            <td align="center" className="w-1/5">0</td>
            <td align="center" className="w-3/5 truncate">
                <div className="w-full truncate">
                    {truncateEthAddress("0xdAC17F958D2ee523a2206206994597C13D831ec7")}
                </div>
            </td>
            <td align="center" className="w-1/5">0</td>
        </tr>
    );
  }

export default GroupRow;

