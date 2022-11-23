import PlayersTableRow from './PlayersTableRow'
import contractAbi from "../contractAbi.json";
import addressesData from "../addresses.json"
import { useContractRead} from 'wagmi';
import {useEffect} from 'react'
import { unpackResult } from "../helpers";

function PlayersTable(props) {

    const matchID = props.match.MatchNumber-1

    const juankmanResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0xb6e2Ab44Ca614E654905C40372518343788238EA', matchID], 
        chainId: 137,
      });

      const graphBoyResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x1446103C5994c8a1c0DC55aB353BacEC3C88A4c6', matchID], 
        chainId: 137,
      });

      const KYCdegenResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x4e103a7aF4D148793304e317728bA0d5D5ea2a3C', matchID], 
        chainId: 137,
      });

      const kingPOAPResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x168f6572cD792102082BB8536D50ad5d7CD95943', matchID], 
        chainId: 137,
      });

      const federikButerinResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x551D7732A5b0Da697aDE54231B204780C17feC56', matchID], 
        chainId: 137,
      });

      const elonMosqResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x881B0bD38A37Bd3d9Ca7D0a49a8C51278A64215B', matchID], 
        chainId: 137,
      });

      const frodonetaResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x8537487a26ed8E502492A7a905C83466bb7E8293', matchID], 
        chainId: 137,
      });

      const theChaloResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0xa97C676B71e1200D712f5F1e3b93E81daEAE51F5', matchID], 
        chainId: 137,
      });

      const zlataitanResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x50427f59edf8d5A26cD6cF45B8f512115BCc5FF1', matchID], 
        chainId: 137,
      });

      const furerMikeResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x90b99EA336bB4d6EAD1a409036e6e2ae8e44eF3C', matchID], 
        chainId: 137,
      });

      const ethAddictResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0xeB13FD078AB234737cC8621Be00F007cA35bB3c3', matchID], 
        chainId: 137,
      });

      const incognitoUserResult = useContractRead({
        addressOrName: addressesData.contractAddress,
        contractInterface: contractAbi,
        functionName: 'userResults',
        args: ['0x403E66Eab56b466C2F10186D8e67aF715181a74a', matchID], 
        chainId: 137,
      });

    return(
        <div className="pt-4">
            <table align="center" className='text-black'>
                <thead>
                    <tr>
                        <th className="text-lg"><strong>Jugador</strong><hr className=''></hr></th>
                        <th align="center" className="text-lg"><strong>Pronóstico</strong><hr></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <PlayersTableRow playerName="Juankman Friedone" homeGuess={unpackResult(juankmanResult.data).home} awayGuess={unpackResult(juankmanResult.data).away}/>
                    <PlayersTableRow playerName="The Graph boy" homeGuess={unpackResult(graphBoyResult.data).home} awayGuess={unpackResult(graphBoyResult.data).away}/>
                    <PlayersTableRow playerName="KYC Degen" homeGuess={unpackResult(KYCdegenResult.data).home} awayGuess={unpackResult(KYCdegenResult.data).away}/>
                    <PlayersTableRow playerName="Federik Buterin" homeGuess={unpackResult(federikButerinResult.data).home} awayGuess={unpackResult(federikButerinResult.data).away}/>
                    <PlayersTableRow playerName="King POAP" homeGuess={unpackResult(kingPOAPResult.data).home} awayGuess={unpackResult(kingPOAPResult.data).away}/>
                    <PlayersTableRow playerName="Elon Mosq" homeGuess={unpackResult(elonMosqResult.data).home} awayGuess={unpackResult(elonMosqResult.data).away}/>
                    <PlayersTableRow playerName="Frodoneta" homeGuess={unpackResult(frodonetaResult.data).home} awayGuess={unpackResult(frodonetaResult.data).away}/>
                    <PlayersTableRow playerName="The Chalo" homeGuess={unpackResult(theChaloResult.data).home} awayGuess={unpackResult(theChaloResult.data).away}/>
                    <PlayersTableRow playerName="Zlataitan" homeGuess={unpackResult(zlataitanResult.data).home} awayGuess={unpackResult(zlataitanResult.data).away}/>
                    <PlayersTableRow playerName="Incognito User" homeGuess={unpackResult(incognitoUserResult.data).home} awayGuess={unpackResult(incognitoUserResult.data).away}/>
                    <PlayersTableRow playerName="Fürer Mike" homeGuess={unpackResult(furerMikeResult.data).home} awayGuess={unpackResult(furerMikeResult.data).away}/>
                    <PlayersTableRow playerName="Eth Addict" homeGuess={unpackResult(ethAddictResult.data).home} awayGuess={unpackResult(ethAddictResult.data).away}/>
                </tbody>
            </table>
        </div>
    )

}

export default PlayersTable;