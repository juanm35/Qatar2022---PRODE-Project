import ResultsTable from '../../components/ResultsTable'
import React, { useState, useEffect } from 'react';
import {useContractRead} from 'wagmi';
import { localhost } from 'wagmi/chains'
import contractAbi from "../../contractAbi.json";

export default function Resultados() {  
  
  // --- 3. READ CONTRACT: users score?
  const userScores = useContractRead({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: contractAbi,
    functionName: 'getScores',
    args: [[]],
    chainId: localhost.id,
  })

  const secondPhaseScoresInitial = [
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 10},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 40},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
    {address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', score: 90},
  ]
const [secondPhase, setSecondPhase] = useState(false);
const [secondPhaseScores, setSecondPhaseScores] = useState(secondPhaseScoresInitial);
const [firstPhaseScores, setFirstPhaseScores] = useState([{address: '', score: 0}]);
useEffect(() => setFirstPhaseScores(userScores.data[0].map((address,index) => { return {"address": address, "score": userScores.data[1][index].toNumber()} })),[])

function handleGroupPhaseClick() {
  setSecondPhase(false)
}

function handleEliminationPhaseClick() {
  setSecondPhase(true)
}

function compareScore(a, b) {
  return (b.score-a.score);
}

    return (
      <div className=" bg-qatar bg-complete">
        <div className="py-20 bg-transparent/[0.3]">
          <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Posiciones</em></h1> 
          <div className='flex gap-1 pb-4 items-center sm:flex-row justify-center md:gap-8 md:my-8'>
            <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Grupos</strong></div>
            <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Eliminatorias</strong></div>
          </div>
          <ResultsTable title={secondPhase? "Fase de Eliminatorias" : "Fase de grupos"} scores={secondPhase? secondPhaseScores.sort(compareScore) : firstPhaseScores.sort(compareScore)}/>
        </div>
      </div>
    )
  }