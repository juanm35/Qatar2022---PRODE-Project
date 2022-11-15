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
import addressesData from "../addresses.json"

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
  addressOrName: addressesData.contractAddress,
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
  addressOrName: addressesData.contractAddress,
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
   addressOrName: addressesData.contractAddress,
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
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: 'getUserResults',
    args: [account.address],
    chainId: localhost.id,
  })
  const userCurrentGuess = userGuessResult.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result));
  useEffect( () => {
    console.log("4. userGuessResult: ", userGuessResult.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result)))
  }, []);

  const realResults = useContractRead({
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: 'getResults',
    args: [],
    chainId: localhost.id,
  })
  const realResultsProcessed = realResults.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result));
  useEffect( () => {
    console.log("5. Real Results: ", realResults, realResults.data?.map((result) => result === 255? {"home": '-', "away": '-'} : unpackResult(result)))
  }, []);

  
  // --------------------------------------------------

  const approved = useContractRead({
    addressOrName: addressesData.tokenAddress,
    contractInterface: erc20Abi,
    functionName: 'allowance',
    args: [account.address, addressesData.contractAddress], 
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
    const pGuessFiltered = participantGuess.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" && match.homeScoreGuess < 16 && match.awayScoreGuess < 16 && (match.awayScoreGuess != 15 || match.homeScoreGuess != 15))
    const pGuessIndexCorrection = pGuessFiltered.map((match) => {return {"matchID": match.matchID-1, "homeScoreGuess": match.homeScoreGuess, "awayScoreGuess": match.awayScoreGuess}} )
    console.log("UNPACKED RESULTS - 1st PHASE: ", pGuessIndexCorrection)
    return packResults(pGuessIndexCorrection)
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
    const pGuess2ndPhaseFiltered = participantGuess2ndPhase.filter((match) => typeof(match.homeScoreGuess) === "number" && typeof(match.awayScoreGuess) === "number" && match.homeScoreGuess < 16 && match.awayScoreGuess < 16 && (match.awayScoreGuess != 15 || match.homeScoreGuess != 15))
    const pGuess2ndPhaseIndexCorrection = pGuess2ndPhaseFiltered.map((match) => {return {"matchID": match.matchID-1, "homeScoreGuess": match.homeScoreGuess, "awayScoreGuess": match.awayScoreGuess}} )
    console.log("UNPACKED RESULTS - 2nd PHASE: ", pGuess2ndPhaseIndexCorrection)
    return packResults(pGuess2ndPhaseIndexCorrection)
  } 

  const [checked, setChecked] = useState(false)
  const [checked2ndPhase, setChecked2ndPhase] = useState(false)
  const [packGroupPhaseGuess, setPackGroupPhaseGuess] = useState({results: [], ids: []})
  const [packEliminationPhaseGuess, setPackEliminationPhaseGuess] = useState({results: [], ids: []})
  function handleCheckboxChange(e) {
    setChecked(e.target.checked)
    setPackGroupPhaseGuess(packProde(participantGuess))
  }

  function handleCheckboxChange2ndPh(e) {
    setChecked2ndPhase(e.target.checked)
    setPackEliminationPhaseGuess(packProdeEliminationPhase(participantGuess2ndPhase))
  }

  const [approvedSuccess, setApprovedSuccess] = useState(false)

  function approveSuccessEvent(){
    setApprovedSuccess(true)
  }

  const [depositSuccess, setDepositSuccess] = useState(false)

  function depositSuccessEvent(){
    setDepositSuccess(true)
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
          {whiteL.data && (alreadyDeposited?.data.toString() != '0' || depositSuccess) || messiRole.data?
          <div>
          {messiRole.data? <div className='text-white text-6xl bg-qatarGold md:text-6xl w-full text-center pt-12 mt-4 pb-10 lg:pb-12'>¡¡¡MESSI USER!!!</div>:<></>}
            <div className='flex gap-1 pb-4 items-center sm:flex-row justify-center md:gap-8 md:my-8'>
              <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Grupos</strong></div>
              <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Eliminatorias</strong></div>
            </div>
              {!secondPhase?
              <div>
                <div>       
                  <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1" updateGuess={updateGuess} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked}/>
                  <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2" updateGuess={updateGuess} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked}/> 
                  <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3" updateGuess={updateGuess} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked}/> 
                </div> 
                <div onChange={handleCheckboxChange} className="flex gap-2 justify-center my-8 bg-transparent/[0.5] w-fit mx-auto p-6 rounded-full">
                  <input type="checkbox" className="w-8"/>
                  <div className="text-white text-lg md:text-4xl">Revisé mis resultados.</div>
                </div>
                {checked?
                  <SetResult guess={packGroupPhaseGuess} messiRole={messiRole.data} secondPhase={secondPhase}/> :
                  <div className={`text-gray-400 bg-gray-200 mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center`}>
                    <strong>{messiRole.data?"Setear Resultados":"¡Enviar Pronóstico!"}</strong>
                    <div className="text-sm underline">Fase de Grupos</div>
                </div>
                }
              </div> :
              <div> 
                <div>       
                  <ProdeRoundCard matches={fixtureDataOctavos} countriesData={Countries} title="OCTAVOS DE FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked2ndPhase}/>
                  <ProdeRoundCard matches={fixtureDataQarters} countriesData={Countries} title="CUARTOS DE FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked2ndPhase}/> 
                  <ProdeRoundCard matches={fixtureDataSemi} countriesData={Countries} title="SEMI FINAL" updateGuess={updateGuessEliminationPhase} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked2ndPhase}/> 
                  <ProdeRoundCard matches={fixtureData3rdAnd4th} countriesData={Countries} title="TERCER Y CUARTO PUESTO" updateGuess={updateGuessEliminationPhase} center={true} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked2ndPhase}/> 
                  <ProdeRoundCard matches={fixtureDataFinal} countriesData={Countries} title="FINAL" updateGuess={updateGuessEliminationPhase} center={true} userCurrentGuess={messiRole.data? realResultsProcessed : userCurrentGuess} disableInput={checked2ndPhase}/> 
                </div>
                <div onChange={handleCheckboxChange2ndPh} className="flex gap-2 justify-center my-8 bg-transparent/[0.5] w-fit mx-auto p-6 rounded-full">
                  <input type="checkbox" className="w-8"/>
                  <div className="text-white text-4xl">Revisé mis resultados.</div>
                </div>
                {checked2ndPhase?
                <SetResult guess={packEliminationPhaseGuess} messiRole={messiRole.data} secondPhase={secondPhase} />:
                <div className={`text-gray-400 bg-gray-200 mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center`}>
                    <strong>{messiRole.data?"Setear Resultados":"¡Enviar Pronóstico!"}</strong>
                    <div className="text-sm underline">Fase de Eliminatorias</div>
                </div>
                }
              </div> }
            </div>:
            whiteL.data && alreadyDeposited.data.toString() === '0'?
            <div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>A ponerlaaa &#128184;... deposita 15 USDC para participar!!!
              <div className='flex flex-col items-center gap-2 mt-4'>
                {approved.data > 0 || approvedSuccess? <></> : <ApproveERC20 approveSuccessFunction={approveSuccessEvent}/>}
                <Deposit tokenApproved={approved.data > 0 || approvedSuccess} depositSuccessFunction={depositSuccessEvent}/>
              </div>
            </div>
            :<div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>No estas registrado &#129300;. Contactá a Fede o Juan para participar!!!</div> 
            }
        </div> :
        <div className='text-white text-lg md:text-2xl w-full text-center px-6 py-4 lg:py-10'>Conectá tu Wallet para participar...</div>  
        }
        {connected && messiRole.data?
          <div className='flex flex-col items-center sm:flex-row justify-center gap-8 my-8'>
            <WhitelistUser />
            <StoreScores />
          </div>
          :
          <></>
        }
      </div>
    </div>
  )
}