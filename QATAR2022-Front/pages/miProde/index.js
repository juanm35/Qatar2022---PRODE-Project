import Countries from '../../data/countriesData.json'
import Fixture from '../../data/fixtureData.json'
import ProdeRoundCard from '../../components/ProdeRoundCard'
import { ConnectButton } from '@rainbow-me/rainbowkit'; 

export default function MiProde() { 
  const fixtureDataFecha1 = Fixture.data.filter((match) => match.RoundNumber === 1);
  const fixtureDataFecha2 = Fixture.data.filter((match) => match.RoundNumber === 2);
  const fixtureDataFecha3 = Fixture.data.filter((match) => match.RoundNumber === 3);

  return (
    <div className=" bg-qatar bg-complete">
      <div className="py-20 bg-transparent/[0.3]">
        <div className="mx-auto mt-32 flex justify-center">
          <ConnectButton/>
        </div>
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Mi Prode</em></h1>        
        <ProdeRoundCard matches={fixtureDataFecha1} countriesData={Countries} title="FECHA 1"/>
        <ProdeRoundCard matches={fixtureDataFecha2} countriesData={Countries} title="FECHA 2"/> 
        <ProdeRoundCard matches={fixtureDataFecha3} countriesData={Countries} title="FECHA 3"/> 
      </div>
    </div>
  )
}