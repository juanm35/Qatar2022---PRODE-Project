import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import ProdeRoundCard from '../components/ProdeRoundCard'
import { ConnectButton } from '@rainbow-me/rainbowkit'; 
import { useAccount, useContractRead, useNetwork } from 'wagmi';
import React, { useState, useEffect } from 'react';
import { localhost } from 'wagmi/chains'
import { packResults, unpackResult } from "../helpers";
import {eliminationPhaseMatchFixture} from '../data/fixtureData.js'
import contractAbi from "../contractAbi.json";
import erc20Abi from "../erc20Abi.json";
import { utils } from "ethers";

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

  // --- 4. READ CONTRACT: users results?
  const userGuessResult = useContractRead({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: contractAbi,
    functionName: 'getUserResults',
    args: [account.address],
    chainId: localhost.id,
  })
  const userCurrentGuess = userGuessResult.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result));
  useEffect( () => {
    console.log("4. userGuessResult: ", userGuessResult.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result)))
  }, []);
  // --------------------------------------------------

  const approved = useContractRead({
    addressOrName: '0xF5aA8e3C6BA1EdF766E197a0bCD5844Fd1ed8A27',
    contractInterface: erc20Abi,
    functionName: 'allowance',
    args: [account.address, "0xee85d401835561De62b874147Eca8A4Fe1D5cBFf"], 
    chainId: localhost.id,
  })
  useEffect( () => {
    if(approved.data) {
      console.log("allowance: ", utils.formatEther(approved.data))
      console.log(approved)
    } else {
      console.log("allowance: ", "no data yet")
    }
  }, []);


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

// compare function
  function compareGuessMatchNumber(a, b) {
    return a.matchID - b.matchID;
  } 

  // participant guess for group phase
  let participantGuess = []

  function updateGuess(guess) {
      const newGuess = participantGuess.filter((element) => element.matchID !== guess.matchID);
      newGuess.push(guess);
      const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
      participantGuess = sortedNewGuess;      
  }
  
  function packProde() {
    const pGuessFiltered = participantGuess.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" )
    console.log("UNPACKED RESULTS - 1st PHASE: ", pGuessFiltered)
    return packResults(pGuessFiltered)
  }

  // participant guess for elimination phase

  let participantGuess2ndPhase = []

  function updateGuessEliminationPhase(guess) {
    const newGuess = participantGuess2ndPhase.filter((element) => element.matchID !== guess.matchID);
    newGuess.push(guess);
    const sortedNewGuess = newGuess.sort(compareGuessMatchNumber);
    participantGuess2ndPhase = sortedNewGuess;
}

  function packProdeEliminationPhase() {
    const pGuess2ndPhaseFiltered = participantGuess2ndPhase.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" )
    console.log("UNPACKED RESULTS - 2nd PHASE: ", pGuess2ndPhaseFiltered)
    return packResults(pGuess2ndPhaseFiltered)
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
          {whiteL.data && alreadyDeposited.data.toString() != '0' || messiRole.data?
          <div>
          {messiRole.data? <div className='text-white text-6xl bg-qatarGold md:text-6xl w-full text-center pt-12 mt-4 pb-10 lg:pb-12'>¡¡¡MESSI USER!!!</div>:<></>}
            <div className='flex gap-1 pb-4 items-center sm:flex-row justify-center md:gap-8 md:my-8'>
              <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Grupos</strong></div>
              <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Eliminatorias</strong></div>
            </div>
              {!secondPhase?
              <div>
                <div>       
                  <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1" updateGuess={updateGuess} userCurrentGuess={userCurrentGuess}/>
                  <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2" updateGuess={updateGuess} userCurrentGuess={userCurrentGuess}/> 
                  <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3" updateGuess={updateGuess} userCurrentGuess={userCurrentGuess}/> 
                </div> 
                  <SetResult guess={participantGuess} messiRole={messiRole.data} packProde={packProde}/>
              </div> :
              <div> 
                <div>       
                  <ProdeRoundCard matches={fixtureDataOctavos} countriesData={Countries} title="OCTAVOS DE FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={userCurrentGuess}/>
                  <ProdeRoundCard matches={fixtureDataQarters} countriesData={Countries} title="CUARTOS DE FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={userCurrentGuess}/> 
                  <ProdeRoundCard matches={fixtureDataSemi} countriesData={Countries} title="SEMI FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={userCurrentGuess}/> 
                  <ProdeRoundCard matches={fixtureData3rdAnd4th} countriesData={Countries} title="TERCER Y CUARTO PUESTO" updateGuess={updateGuessEliminationPhase} center={true} userCurrentGuess={userCurrentGuess}/> 
                  <ProdeRoundCard matches={fixtureDataFinal} countriesData={Countries} title="FINAL" updateGuess={updateGuessEliminationPhase} center={true} userCurrentGuess={userCurrentGuess}/> 
                </div> 
                <SetResult guess={participantGuess2ndPhase} messiRole={messiRole.data} packProde={packProdeEliminationPhase}/>
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
        {connected && messiRole.data?
          <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
            {/* <WhitelistUser />
            <SetResult />
            <StoreScores /> */}
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}