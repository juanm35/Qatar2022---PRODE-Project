import ResultsTable from '../../components/ResultsTable'
import React, { useState, useEffect } from 'react';
import {useContractRead} from 'wagmi';
import { localhost } from 'wagmi/chains'
import contractAbi from "../../contractAbi.json";
import addressesData from '../../addresses.json'

export default function Resultados() {  
  
  // --- 3. READ CONTRACT: users score?
  const userScores = useContractRead({
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: 'getScores',
    args: [[]],
    chainId: localhost.id,
  })


const [scores, setScores] = useState([{address: '', score: 0}]);
useEffect(() => setScores(userScores.data[0].map((address,index) => { return {"address": address, "score": userScores.data[1][index].toNumber()} })),[])

function compareScore(a, b) {
  return (b.score-a.score);
}

    return (
      <div className=" bg-qatar bg-complete">
        <div className="py-20 bg-transparent/[0.3] min-h-screen">
          <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Posiciones</em></h1>           
          <ResultsTable scores={scores.sort(compareScore)}/>
        </div>
      </div>
    )
  }