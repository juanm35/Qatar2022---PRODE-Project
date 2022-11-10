import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import ProdeRoundCard from '../components/ProdeRoundCard'
import { ConnectButton } from '@rainbow-me/rainbowkit'; 
import { useAccount, useContractRead, useNetwork } from 'wagmi';
import React, { useState, useEffect } from 'react';
import contractAbi from "../contractAbi.json";
import { localhost } from 'wagmi/chains'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { packResults, unpackResult } from "../helpers";
import {eliminationPhaseRounds} from  '../data/seedsEliminationBracket'
import {eliminationPhaseMatchFixture} from '../data/fixtureData.js'

// writing contract
import { WhitelistUser } from '../components/WhitelistUser.tsx'
import { SetResult } from '../components/SetResult.tsx'
import { ApproveERC20 } from '../components/ApproveERC20.tsx'
import { Deposit } from '../components/Deposit.tsx'
import { ClaimReward } from '../components/ClaimReward.tsx'
import { StoreScores } from '../components/StoreScores.tsx'

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
console.log("account:", account.address);
useEffect( () => setConnected(account.isConnected), [account.isConnected]);
// --------------------------------------------------

// // --- 1. READ CONTRACT: Is user whitelisted?
const whiteL = useContractRead({
  addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
  contractInterface: contractAbi,
  functionName: 'whitelist',
  args: [account.address], // for sample user
  chainId: localhost.id,
})
useEffect( () => {
  console.log("1. whiteListed: ", whiteL.data)
}, []);
// // --------------------------------------------------

// Using this to check if account has messi role (is admin) or not.
const messiRole = useContractRead({
  addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
  contractInterface: contractAbi,
  functionName: 'hasRole',
  // MESSIROLE = 0x6c517e5383e587fe2f529c2d8a0cde0b7f7a101600f2b798a0bd2cd9190ef44f
  args: ['0x6c517e5383e587fe2f529c2d8a0cde0b7f7a101600f2b798a0bd2cd9190ef44f', account.address], 
  chainId: localhost.id,
})
useEffect( () => {
  console.log("1.5 messiRole: ", messiRole.data)
}, []);

 // --- 2. READ CONTRACT: users total deposits?
 const alreadyDeposited = useContractRead({
   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
   contractInterface: contractAbi,
   functionName: 'deposits',
   args: [account.address], 
   chainId: localhost.id,
 })
 useEffect( () => {
   console.log("2. deposited: ", alreadyDeposited.data?.toString())
 }, []);
 // --------------------------------------------------

 // --- 3. READ CONTRACT: users score?
  const userScore = useContractRead({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: contractAbi,
    functionName: 'getScores',
    args: [],
    chainId: localhost.id,
  })
  useEffect( () => {
    console.log("3. userScore: ", userScore.data?.toString()) }, []);
  // --------------------------------------------------

 // --- 4. READ CONTRACT: users results?
 const userGuessResult = useContractRead({
   addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
   contractInterface: contractAbi,
   functionName: 'getResults',
   args: [account.address],
   chainId: localhost.id,
 })
 useEffect( () => {
   console.log("4. userGuessResult: ", userGuessResult.data, unpackResult([]))
 }, []);
 // --------------------------------------------------



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
  
  const [pack, setPack] = useState({results: [], ids: []});

  function updateGuess(guess) {
      const newGuess = participantGuess.filter((element) => element.matchID !== guess.matchID);
      newGuess.push(guess);
      const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
      participantGuess = sortedNewGuess;
  }
  
  function sendProde() {
    const pGuessOnlyFiltered = participantGuess.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" )
    setPack(packResults(pGuessOnlyFiltered))
    console.log("Boleta:", pack)
    write
  }

  let participantGuess2ndPhase = []

  function updateGuessEliminationPhase(guess) {
    const newGuess = participantGuess2ndPhase.filter((element) => element.matchID !== guess.matchID);
    newGuess.push(guess);
    const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
    participantGuess2ndPhase = sortedNewGuess;
}

  function sendProdeEliminationPhase() {
    const pGuess2ndPhaseFiltered = participantGuess2ndPhase.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" )
    setPack(packResults(pGuess2ndPhaseFiltered))
    console.log("Boleta:", pack)
    write
  }

  // --- 5. WRITE CONTRACT: set user results guess
const { config } = usePrepareContractWrite({
  addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
  contractInterface: contractAbi,
  functionName: "setResults",
  args: [pack.results, pack.ids],
  enabled: true,
})

const { data, write } = useContractWrite(config)

const { isLoading, isSuccess, isError } = useWaitForTransaction({
  hash: data?.hash,
})
  

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
          {/* {whiteL.data && alreadyDeposited.data.toString() != '0' || messiRole.data? */}
          {whiteL.data || messiRole.data?
          <div>
          {messiRole.data? <div className='text-white text-6xl bg-qatarGold md:text-6xl w-full text-center pt-12 mt-4 pb-10 lg:pb-12'>¡¡¡MESSI USER!!!</div>:<></>}
            <div className='flex gap-1 pb-4 items-center sm:flex-row justify-center md:gap-8 md:my-8'>
              <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Grupos</strong></div>
              <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Eliminatorias</strong></div>
            </div>
              {!secondPhase?
              <div>
                <div>       
                  <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1" updateGuess={updateGuess}/>
                  <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2" updateGuess={updateGuess}/> 
                  <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3" updateGuess={updateGuess}/> 
                </div> 
                <div onClick={sendProde} className={`text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  ${messiRole.data?"hover:bg-qatarGold":"hover:bg-qatarRed"} hover:text-white hover:border-solid-white hover:border-2`}>
                  <div>
                    <strong>{isLoading ? "Enviando..." : (messiRole.data?"Setear Resultados":"¡Enviar Pronóstico!")}</strong>
                    <div className="text-sm underline">Fase de Grupos</div>
                  </div>
                </div>
                <strong>
                    {isSuccess && (
                    <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
                      Resultados enviados exitosamente!!! &#9989;
                    </div>
                  )}
                  {isError && (
                    <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
                      La transacción no se completo correctamente. &#10060;
                    </div>
                  )}
                </strong>
              </div> :
              <div> 
                <div>       
                  <ProdeRoundCard matches={fixtureDataOctavos} countriesData={Countries} title="OCTAVOS DE FINAL" updateGuess={updateGuessEliminationPhase}/>
                  <ProdeRoundCard matches={fixtureDataQarters} countriesData={Countries} title="CUARTOS DE FINAL" updateGuess={updateGuessEliminationPhase}/> 
                  <ProdeRoundCard matches={fixtureDataSemi} countriesData={Countries} title="SEMI FINAL" updateGuess={updateGuessEliminationPhase}/> 
                  <ProdeRoundCard matches={fixtureData3rdAnd4th} countriesData={Countries} title="TERCER Y CUARTO PUESTO" updateGuess={updateGuessEliminationPhase} center={true}/> 
                  <ProdeRoundCard matches={fixtureDataFinal} countriesData={Countries} title="FINAL" updateGuess={updateGuessEliminationPhase} center={true}/> 
                </div> 
                <div onClick={sendProdeEliminationPhase} className='text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  hover:bg-qatarRed hover:text-white hover:border-solid-white hover:border-2'>
                  <div>
                    <strong>{isLoading ? "Enviando..." : (messiRole.data?"Setear Resultados":"¡Enviar Pronóstico!")}</strong>
                    <div className="text-sm underline">Fase de Eliminatorias</div>
                  </div>
                </div>
                <strong>
                    {isSuccess && (
                    <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
                      Resultados enviados exitosamente!!! &#9989;
                    </div>
                  )}
                  {isError && (
                    <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
                      La transacción no se completo correctamente. &#10060;
                    </div>
                  )}
                </strong>
              </div> }
            </div>:
            whiteL.data && alreadyDeposited.data.toString() === '0'?
            <div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>A ponerlaaa &#128184;... deposita 20 DAI para participar!!!
              <div className='flex flex-col items-center gap-2 mt-4'>
                <ApproveERC20 />
                <Deposit />
              </div>
            </div>
            :<div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>No estas registrado &#129300;. Contactá a Fede o Juan para participar!!!</div> 
            }
        </div> :
        <div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>Conectá tu Wallet para participar...</div>  
        }
        {messiRole.data?
          <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
            <WhitelistUser />
            <SetResult />
            <StoreScores />
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}