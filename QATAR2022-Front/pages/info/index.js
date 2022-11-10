import Group from '../../components/Group'
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import React, {useState } from 'react';
import {matchResultsGroupPhase, countriesStats, seedsTournamentBrackets} from '../../data/fixtureData.js'

export default function Home() {

  const matchResultsGroupA =  matchResultsGroupPhase.filter((match) => match.Group === "groupA");
  const matchResultsGroupB =  matchResultsGroupPhase.filter((match) => match.Group === "groupB");
  const matchResultsGroupC =  matchResultsGroupPhase.filter((match) => match.Group === "groupC");
  const matchResultsGroupD =  matchResultsGroupPhase.filter((match) => match.Group === "groupD");
  const matchResultsGroupE =  matchResultsGroupPhase.filter((match) => match.Group === "groupE");
  const matchResultsGroupF =  matchResultsGroupPhase.filter((match) => match.Group === "groupF");
  const matchResultsGroupG =  matchResultsGroupPhase.filter((match) => match.Group === "groupG");
  const matchResultsGroupH =  matchResultsGroupPhase.filter((match) => match.Group === "groupH");
  
  const [secondPhase, setSecondPhase] = useState(false); 

  function handleGroupPhaseClick() {
    setSecondPhase(false)
  }

  function handleEliminationPhaseClick() {
    setSecondPhase(true)
  }



  return (
    <div className="bg-qatar bg-complete">
     <div className="pt-20 bg-transparent/[0.3] pb-20">
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Fixture y Resultados</em></h1>
        <div className='flex gap-1 pb-4 items-center sm:flex-row justify-center md:gap-8 md:my-8'>
            <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Grupos</strong></div>
            <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-40 md:w-60 text-center text-base hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Eliminatorias</strong></div>
        </div>
        {secondPhase?
        <div className="py-12 bg-transparent/[0.6] lg:mx-10 xl:mx-20 mb-12 rounded-lg 2xl:flex 2xl:justify-center 2xl:pl-60">
          <div className='overflow-x-auto'>
            <Bracket 
              mobileBreakpoint={0} 
              rounds={seedsTournamentBrackets} 
              renderSeedComponent={CustomSeed} 
              roundTitleComponent={(title, roundIndex) => {
                 return <div style={{ textAlign: 'center', color: '#eeeee5', paddingBottom: 40, fontSize: 20 }}>{title}</div>;
              }} />
          </div>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-4'>
          <Group group="Grupo A" countriesData={countriesStats.groupA} fixtureData={matchResultsGroupA}/>
          <Group group="Grupo B" countriesData={countriesStats.groupB} fixtureData={matchResultsGroupB}/>
          <Group group="Grupo C" countriesData={countriesStats.groupC} fixtureData={matchResultsGroupC}/>
          <Group group="Grupo D" countriesData={countriesStats.groupD} fixtureData={matchResultsGroupD}/>
          <Group group="Grupo E" countriesData={countriesStats.groupE} fixtureData={matchResultsGroupE}/>
          <Group group="Grupo F" countriesData={countriesStats.groupF} fixtureData={matchResultsGroupF}/>
          <Group group="Grupo G" countriesData={countriesStats.groupG} fixtureData={matchResultsGroupG}/>
          <Group group="Grupo H" countriesData={countriesStats.groupH} fixtureData={matchResultsGroupH}/>
        </div>
        }
      </div>
    </div>
  )
}

const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div className='px-2'>
          <SeedTeam>
            <div align="left" className="flex gap-2 w-full my-1 items-center h-10">
              <div className="w-1/3 h-full flex flex-col justify-center items-center">
                  {seed.teams[0]?.flag? <img src={seed.teams[0]?.flag} alt={`flag`} className="w-14 max-h-full"/> : <div></div>}
              </div>
              <div className="w-2/3 truncate">{seed.teams[0]?.name || 'NO TEAM '}</div>
            </div>
            <div className='w-2 text-lg flex justify-center'>{(seed.score.home !== seed.score.away) || seed.score.home === '-' || seed.score.away === '-'? seed.score.home : `${seed.score.home}(${seed.penalties.home})`}</div>
          </SeedTeam>
          <SeedTeam>
            <div align="left" className="flex gap-2 w-full my-1 items-center h-10">
              <div className="w-1/3 h-full flex flex-col justify-center items-center">
                {seed.teams[1]?.flag? <img src={seed.teams[1]?.flag} alt={`flag`} className="w-14 max-h-full"/> : <div></div>}
              </div>
              <div className="w-2/3 truncate">{seed.teams[1]?.name || 'NO TEAM '}</div>
            </div>
            <div className='w-2 text-lg flex justify-center'>{(seed.score.home !== seed.score.away) || seed.score.home === '-' || seed.score.away === '-'? seed.score.away : `${seed.score.away}(${seed.penalties.away})`}</div></SeedTeam>
        </div>
      </SeedItem>
        <div className='text-qatarSilver pt-1'>{seed.date}</div>
    </Seed>
  );
};



