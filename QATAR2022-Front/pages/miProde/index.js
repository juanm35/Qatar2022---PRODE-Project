import Countries from '../../data/countriesData.json'
import Fixture from '../../data/fixtureData.json'
import ProdeRoundCard from '../../components/ProdeRoundCard'
import { ConnectButton } from '@rainbow-me/rainbowkit'; 
import { useAccount, useContractRead, useNetwork } from 'wagmi';
import React, { useState, useEffect } from 'react';
import contractAbi from "../../contractAbi.json";
import { localhost } from 'wagmi/chains'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { packResults, unpackResult } from "../../helpers";
import {eliminationPhaseRounds} from  '../../data/seedsEliminationBracket'
import {eliminationPhaseMatchFixture} from '../../data/fixtureData.js'
import { WhitelistUser } from '../../components/WhitelistUser.tsx'
import { SetResult } from '../../components/SetResult.tsx'
import { ApproveERC20 } from '../../components/ApproveERC20.tsx'
import { Deposit } from '../../components/Deposit.tsx'

export default function MiProde() { 

const [secondPhase, setSecondPhase] = useState(false);

function handleGroupPhaseClick() {
  setSecondPhase(false)
}

function handleEliminationPhaseClick() {
  setSecondPhase(true)
}

// --- Set variable for checking if user is connected
const [connected, setConnected] = useState(false);
const account = useAccount()
useEffect( () => setConnected(account.isConnected), [account.isConnected]);
// --------------------------------------------------

// // --- 1. READ CONTRACT: Is user whitelisted?
// const whiteL = useContractRead({
//   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
//   contractInterface: contractAbi,
//   functionName: 'whitelist',
//   args: ['0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B'], // for sample user
//   chainId: localhost.id,
// })
// useEffect( () => {
//   console.log("1. whiteListed: ", whiteL.data)
// }, []);
// // --------------------------------------------------

// // --- 2. READ CONTRACT: users total deposits?
// const alreadyDeposited = useContractRead({
//   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
//   contractInterface: contractAbi,
//   functionName: 'deposits',
//   args: ['0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B'], // for sample user
//   chainId: localhost.id,
// })
// useEffect( () => {
//   console.log("2. deposited: ", alreadyDeposited.data.toString())
// }, []);
// // --------------------------------------------------

// // --- 3. READ CONTRACT: users score?
// const userScore = useContractRead({
//   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
//   contractInterface: contractAbi,
//   functionName: 'scores',
//   args: ['0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B'], // for sample user
//   chainId: localhost.id,
// })
// useEffect( () => {
//   console.log("3. userScore: ", userScore.data.toString())
// }, []);
// // --------------------------------------------------

// // --- 4. READ CONTRACT: users results?
// const userGuessResult = useContractRead({
//   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
//   contractInterface: contractAbi,
//   functionName: 'userResults',
//   args: ['0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B',1], // for sample user and sample match
//   chainId: localhost.id,
// })
// useEffect( () => {
//   console.log("4. userGuessResult: ", unpackResult(userGuessResult.data))
// }, []);
// // --------------------------------------------------

// // --- 5. WRITE CONTRACT: set user results guess

// // const { config } = usePrepareContractWrite({
// //   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
// //   contractInterface: contractAbi,
// //   functionName: 'setResults',
// //   args: [[50],[1]],
// // })
// // const { data, isLoading, isSuccess, write, status } = useContractWrite(config)
// // --------------------------------------------------

// FIXTURES GROUP PHASES
  const fixtureDataFecha1 = Fixture.data.filter((match) => match.RoundNumber === 1);
  const fixtureDataFecha2 = Fixture.data.filter((match) => match.RoundNumber === 2);
  const fixtureDataFecha3 = Fixture.data.filter((match) => match.RoundNumber === 3);

// FIXTURE FINAL PHASES
const fixtureDataOctavos = eliminationPhaseMatchFixture.filter((match) => match.RoundNumber === 4);
const fixtureDataQarters = eliminationPhaseMatchFixture.filter((match) => match.RoundNumber === 5);
const fixtureDataSemi = eliminationPhaseMatchFixture.filter((match) => match.RoundNumber === 6);
const fixtureData3rdAnd4th = eliminationPhaseMatchFixture.filter((match) => match.RoundNumber === 7);
const fixtureDataFinal = eliminationPhaseMatchFixture.filter((match) => match.RoundNumber === 8);


  function compareGuessMatchNumber(a, b) {
    return a.matchID - b.matchID;
  }

  let participantGuess = []

  function updateGuess(guess) {
      const newGuess = participantGuess.filter((element) => element.matchID !== guess.matchID);
      newGuess.push(guess);
      const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
      participantGuess = sortedNewGuess;
  }

  function sendProde() {
    console.log("Boleta:", participantGuess);
  }

  let participantGuessEliminationPhase = []

  function updateGuessEliminationPhase(guess) {
    const newGuess = participantGuessEliminationPhase.filter((element) => element.matchID !== guess.matchID);
    newGuess.push(guess);
    const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
    participantGuessEliminationPhase = sortedNewGuess;
}

  function sendProdeEliminationPhase() {
    console.log("Boleta:", participantGuessEliminationPhase);
  }
  

  return (
    <div className=" bg-qatar bg-complete">
      <div className="py-20 bg-transparent/[0.3] min-h-screen">
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-10 lg:pb-12'><em>Mi Prode</em></h1> 
        <div className="mx-auto mt-2 lg:mt-8 flex justify-center">
          <ConnectButton label="Conectar Wallet"/>
        </div>         
        {
        connected? 
        <div>
          <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
            <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Fase de Grupos</strong></div>
            <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Fase de Eliminatorias</strong></div>
          </div>
          {!secondPhase?
          <div>
            <div>       
              <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1" updateGuess={updateGuess}/>
              <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2" updateGuess={updateGuess}/> 
              <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3" updateGuess={updateGuess}/> 
            </div> 
            <div onClick={sendProde} className='text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  hover:bg-qatarRed hover:text-white hover:border-solid-white hover:border-2'><div><strong>¡Enviar Pronóstico!</strong><div className="text-sm underline">Fase de Grupos</div></div></div>
            <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
              <WhitelistUser />
              <SetResult />
            </div>
            <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
              <ApproveERC20 />
              <Deposit />
            </div>
          </div> :
          <div> 
            <div>       
              <ProdeRoundCard matches={fixtureDataOctavos} countriesData={Countries} title="OCTAVOS DE FINAL" updateGuess={updateGuessEliminationPhase}/>
              <ProdeRoundCard matches={fixtureDataQarters} countriesData={Countries} title="CUARTOS DE FINAL" updateGuess={updateGuessEliminationPhase}/> 
              <ProdeRoundCard matches={fixtureDataSemi} countriesData={Countries} title="SEMI FINAL" updateGuess={updateGuessEliminationPhase}/> 
              <ProdeRoundCard matches={fixtureData3rdAnd4th} countriesData={Countries} title="TERCER Y CUARTO PUESTO" updateGuess={updateGuessEliminationPhase} center={true}/> 
              <ProdeRoundCard matches={fixtureDataFinal} countriesData={Countries} title="FINAL" updateGuess={updateGuessEliminationPhase} center={true}/> 
            </div> 
            <div onClick={sendProdeEliminationPhase} className='text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  hover:bg-qatarRed hover:text-white hover:border-solid-white hover:border-2'><div><strong>¡Enviar Pronóstico!</strong><div className="text-sm underline">Fase de Eliminatorias</div></div></div>
          </div>
          }
        </div> :
        <div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>Conectá tu Wallet para participar Da Prode...</div>  
        }
      </div>
    </div>
  )
}