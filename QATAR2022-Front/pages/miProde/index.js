import Countries from '../../data/countriesData.json'
import Fixture from '../../data/fixtureData.json'
import ProdeRoundCard from '../../components/ProdeRoundCard'
import { ConnectButton } from '@rainbow-me/rainbowkit'; 
import { useAccount } from 'wagmi';
import React, { useState } from 'react';

export default function MiProde() { 

  const account = useAccount()

  const fixtureDataFecha1 = Fixture.data.filter((match) => match.RoundNumber === 1);
  const fixtureDataFecha2 = Fixture.data.filter((match) => match.RoundNumber === 2);
  const fixtureDataFecha3 = Fixture.data.filter((match) => match.RoundNumber === 3);


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

  const [error, setError] = useState('');

  function sendProde() {
    console.log("Boleta:", participantGuess);
  }

  return (
    <div className=" bg-qatar bg-complete">
      <div className="py-20 bg-transparent/[0.3] min-h-screen">
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-10 lg:pb-12'><em>Mi Prode</em></h1>          
        {account.isConnected? <div></div> :
        <div className='text-white text-lg md:text-2xl w-full text-center py-4 lg:py-10'>Conectá to Wallet para participar Da Prode...</div>  }
        <div className="mx-auto mt-2 lg:mt-8 flex justify-center">
          <ConnectButton label="Conectar Wallet"/>
        </div> 
        
        {account.isConnected?
        <div>
          <div>       
            <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1" updateGuess={updateGuess}/>
            <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2" updateGuess={updateGuess}/> 
            <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3" updateGuess={updateGuess}/> 
          </div> 
          <div onClick={sendProde} className='text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  hover:bg-qatarRed hover:text-white hover:border-solid-white hover:border-2'><strong>¡Enviar Pronóstico!</strong></div>
        </div>: <div></div>
        }
      </div>
    </div>
  )
}