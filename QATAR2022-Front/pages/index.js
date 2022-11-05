import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import Group from '../components/Group'
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import React, { useState } from 'react';
import {eliminationPhaseRounds} from  '../data/eliminationFixture'

export default function Home() {

  const fixtureGroupA =  Fixture.data.filter((match) => match.Group === "groupA");
  const fixtureGroupB =  Fixture.data.filter((match) => match.Group === "groupB");
  const fixtureGroupC =  Fixture.data.filter((match) => match.Group === "groupC");
  const fixtureGroupD =  Fixture.data.filter((match) => match.Group === "groupD");
  const fixtureGroupE =  Fixture.data.filter((match) => match.Group === "groupE");
  const fixtureGroupF =  Fixture.data.filter((match) => match.Group === "groupF");
  const fixtureGroupG =  Fixture.data.filter((match) => match.Group === "groupG");
  const fixtureGroupH =  Fixture.data.filter((match) => match.Group === "groupH");
  
  const [secondPhase, setSecondPhase] = useState(false); 

  function handleGroupPhaseClick() {
    setSecondPhase(false)
  }

  function handleEliminationPhaseClick() {
    setSecondPhase(true)
  }

  // Setting 8vos finals
  function set8vosFinalsA(winnerA, runnerA){
    eliminationPhaseRounds[0].seeds[0].teams[0].name = winnerA.name;
    eliminationPhaseRounds[0].seeds[4].teams[1].name = runnerA.name;
    eliminationPhaseRounds[0].seeds[0].teams[0].flag = winnerA.flag;
    eliminationPhaseRounds[0].seeds[4].teams[1].flag = runnerA.flag;
  
  }
  function set8vosFinalsB(winnerB, runnerB){
    eliminationPhaseRounds[0].seeds[4].teams[0].name = winnerB.name;
    eliminationPhaseRounds[0].seeds[0].teams[1].name = runnerB.name;
    eliminationPhaseRounds[0].seeds[4].teams[0].flag = winnerB.flag;
    eliminationPhaseRounds[0].seeds[0].teams[1].flag = runnerB.flag;
  
  }
  function set8vosFinalsC(winnerC, runnerC){
    eliminationPhaseRounds[0].seeds[1].teams[0].name = winnerC.name;
    eliminationPhaseRounds[0].seeds[5].teams[1].name = runnerC.name;
    eliminationPhaseRounds[0].seeds[1].teams[0].flag = winnerC.flag;
    eliminationPhaseRounds[0].seeds[5].teams[1].flag = runnerC.flag;
  
  }
  function set8vosFinalsD(winnerD, runnerD){
    eliminationPhaseRounds[0].seeds[1].teams[1].name = runnerD.name;
    eliminationPhaseRounds[0].seeds[5].teams[0].name = winnerD.name;
    eliminationPhaseRounds[0].seeds[1].teams[1].flag = runnerD.flag;
    eliminationPhaseRounds[0].seeds[5].teams[0].flag = winnerD.flag;
  
  }
  function set8vosFinalsE(winnerE, runnerE){
    eliminationPhaseRounds[0].seeds[2].teams[0].name = winnerE.name;
    eliminationPhaseRounds[0].seeds[6].teams[1].name = runnerE.name;
    eliminationPhaseRounds[0].seeds[2].teams[0].flag = winnerE.flag;
    eliminationPhaseRounds[0].seeds[6].teams[1].flag = runnerE.flag;
  
  }
  function set8vosFinalsF(winnerF, runnerF){
    eliminationPhaseRounds[0].seeds[2].teams[1].name = runnerF.name;
    eliminationPhaseRounds[0].seeds[6].teams[0].name = winnerF.name;
    eliminationPhaseRounds[0].seeds[2].teams[1].flag = runnerF.flag;
    eliminationPhaseRounds[0].seeds[6].teams[0].flag = winnerF.flag;
  
  }
  function set8vosFinalsG(winnerG, runnerG){
    eliminationPhaseRounds[0].seeds[3].teams[0].name = winnerG.name;
    eliminationPhaseRounds[0].seeds[7].teams[1].name = runnerG.name;
    eliminationPhaseRounds[0].seeds[3].teams[0].flag = winnerG.flag;
    eliminationPhaseRounds[0].seeds[7].teams[1].flag = runnerG.flag;
  
  }
  function set8vosFinalsH(winnerH, runnerH){
    eliminationPhaseRounds[0].seeds[3].teams[1].name = runnerH.name;
    eliminationPhaseRounds[0].seeds[7].teams[0].name = winnerH.name;
    eliminationPhaseRounds[0].seeds[3].teams[1].flag = runnerH.flag;
    eliminationPhaseRounds[0].seeds[7].teams[0].flag = winnerH.flag;
  
  }
  
  // Setting Qater finals
  const match8vos1 = eliminationPhaseRounds[0].seeds[0]
  const match8vos2 = eliminationPhaseRounds[0].seeds[1]
  const match8vos3 = eliminationPhaseRounds[0].seeds[2]
  const match8vos4 = eliminationPhaseRounds[0].seeds[3]
  const match8vos5 = eliminationPhaseRounds[0].seeds[4]
  const match8vos6 = eliminationPhaseRounds[0].seeds[5]
  const match8vos7 = eliminationPhaseRounds[0].seeds[6]
  const match8vos8 = eliminationPhaseRounds[0].seeds[7]
  if((match8vos1.score.home > match8vos1.score.away || match8vos1.penalties.home > match8vos1.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[0].teams[0].name = match8vos1.teams[0].name
    eliminationPhaseRounds[1].seeds[0].teams[0].flag = match8vos1.teams[0].flag
  } else if ((match8vos1.score.home < match8vos1.score.away || match8vos1.penalties.home < match8vos1.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[0].teams[0].name = match8vos1.teams[1].name
    eliminationPhaseRounds[1].seeds[0].teams[0].flag = match8vos1.teams[1].flag
  }
  if((match8vos2.score.home > match8vos2.score.away || match8vos2.penalties.home > match8vos2.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[0].teams[1].name = match8vos2.teams[0].name
    eliminationPhaseRounds[1].seeds[0].teams[1].flag = match8vos2.teams[0].flag
  } else if ((match8vos2.score.home < match8vos2.score.away || match8vos2.penalties.home < match8vos2.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[0].teams[1].name = match8vos2.teams[1].name
    eliminationPhaseRounds[1].seeds[0].teams[1].flag = match8vos2.teams[1].flag
  }
  if((match8vos3.score.home > match8vos3.score.away || match8vos3.penalties.home > match8vos3.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[1].teams[0].name = match8vos3.teams[0].name
    eliminationPhaseRounds[1].seeds[1].teams[0].flag = match8vos3.teams[0].flag
  } else if ((match8vos3.score.home < match8vos3.score.away || match8vos3.penalties.home < match8vos3.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[1].teams[0].name = match8vos3.teams[1].name
    eliminationPhaseRounds[1].seeds[1].teams[0].flag = match8vos3.teams[1].flag
  }
  if((match8vos4.score.home > match8vos4.score.away || match8vos4.penalties.home > match8vos4.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[1].teams[1].name = match8vos4.teams[0].name
    eliminationPhaseRounds[1].seeds[1].teams[1].flag = match8vos4.teams[0].flag
  } else if ((match8vos4.score.home < match8vos4.score.away || match8vos4.penalties.home < match8vos4.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[1].teams[1].name = match8vos4.teams[1].name
    eliminationPhaseRounds[1].seeds[1].teams[1].flag = match8vos4.teams[1].flag
  }
  if((match8vos5.score.home > match8vos5.score.away || match8vos5.penalties.home > match8vos5.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[2].teams[0].name = match8vos5.teams[0].name
    eliminationPhaseRounds[1].seeds[2].teams[0].flag = match8vos5.teams[0].flag
  } else if ((match8vos5.score.home < match8vos5.score.away || match8vos5.penalties.home < match8vos5.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[2].teams[0].name = match8vos5.teams[1].name
    eliminationPhaseRounds[1].seeds[2].teams[0].flag = match8vos5.teams[1].flag
  }
  if((match8vos6.score.home > match8vos6.score.away || match8vos6.penalties.home > match8vos6.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[2].teams[1].name = match8vos6.teams[0].name
    eliminationPhaseRounds[1].seeds[2].teams[1].flag = match8vos6.teams[0].flag
  } else if ((match8vos6.score.home < match8vos6.score.away || match8vos6.penalties.home < match8vos6.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[2].teams[1].name = match8vos6.teams[1].name
    eliminationPhaseRounds[1].seeds[2].teams[1].flag = match8vos6.teams[1].flag
  }
  if((match8vos7.score.home > match8vos7.score.away || match8vos7.penalties.home > match8vos7.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[3].teams[0].name = match8vos7.teams[0].name
    eliminationPhaseRounds[1].seeds[3].teams[0].flag = match8vos7.teams[0].flag
  } else if ((match8vos7.score.home < match8vos7.score.away || match8vos7.penalties.home < match8vos7.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[3].teams[0].name = match8vos7.teams[1].name
    eliminationPhaseRounds[1].seeds[3].teams[0].flag = match8vos7.teams[1].flag
  }
  if((match8vos8.score.home > match8vos8.score.away || match8vos8.penalties.home > match8vos8.penalties.away) ?? false ) {
    eliminationPhaseRounds[1].seeds[3].teams[1].name = match8vos8.teams[0].name
    eliminationPhaseRounds[1].seeds[3].teams[1].flag = match8vos8.teams[0].flag
  } else if ((match8vos8.score.home < match8vos8.score.away || match8vos8.penalties.home < match8vos8.penalties.away) ?? false) {
    eliminationPhaseRounds[1].seeds[3].teams[1].name = match8vos8.teams[1].name
    eliminationPhaseRounds[1].seeds[3].teams[1].flag = match8vos8.teams[1].flag
  }
  
  // Setting Semi Finals
  const matchQ1 = eliminationPhaseRounds[1].seeds[0]
  const matchQ2 = eliminationPhaseRounds[1].seeds[1]
  const matchQ3 = eliminationPhaseRounds[1].seeds[2]
  const matchQ4 = eliminationPhaseRounds[1].seeds[3]
  if((matchQ1.score.home > matchQ1.score.away || matchQ1.penalties.home > matchQ1.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[0].teams[0].name = matchQ1.teams[0].name
    eliminationPhaseRounds[2].seeds[0].teams[0].flag = matchQ1.teams[0].flag
  } else if ((matchQ1.score.home < matchQ1.score.away || matchQ1.penalties.home < matchQ1.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[0].teams[0].name = matchQ1.teams[1].name
    eliminationPhaseRounds[2].seeds[0].teams[0].flag = matchQ1.teams[1].flag
  }
  if((matchQ2.score.home > matchQ2.score.away || matchQ2.penalties.home > matchQ2.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[0].teams[1].name = matchQ2.teams[0].name
    eliminationPhaseRounds[2].seeds[0].teams[1].flag = matchQ2.teams[0].flag
  } else if ((matchQ2.score.home < matchQ2.score.away || matchQ2.penalties.home < matchQ2.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[0].teams[1].name = matchQ2.teams[1].name
    eliminationPhaseRounds[2].seeds[0].teams[1].flag = matchQ2.teams[1].flag
  }
  if((matchQ3.score.home > matchQ3.score.away || matchQ3.penalties.home > matchQ3.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[1].teams[0].name = matchQ3.teams[0].name
    eliminationPhaseRounds[2].seeds[1].teams[0].flag = matchQ3.teams[0].flag
  } else if ((matchQ3.score.home < matchQ3.score.away || matchQ3.penalties.home < matchQ3.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[1].teams[0].name = matchQ3.teams[1].name
    eliminationPhaseRounds[2].seeds[1].teams[0].flag = matchQ3.teams[1].flag
  }
  if((matchQ4.score.home > matchQ4.score.away || matchQ4.penalties.home > matchQ4.penalties.away) ?? false ) {
    eliminationPhaseRounds[2].seeds[1].teams[1].name = matchQ4.teams[0].name
    eliminationPhaseRounds[2].seeds[1].teams[1].flag = matchQ4.teams[0].flag
  } else if ((matchQ4.score.home < matchQ4.score.away || matchQ4.penalties.home < matchQ4.penalties.away) ?? false) {
    eliminationPhaseRounds[2].seeds[1].teams[1].name = matchQ4.teams[1].name
    eliminationPhaseRounds[2].seeds[1].teams[1].flag = matchQ4.teams[1].flag
  }

  // Setting FINAL
  const matchS1 = eliminationPhaseRounds[2].seeds[0]
  const matchS2 = eliminationPhaseRounds[2].seeds[1]
  if((matchS1.score.home > matchS1.score.away || matchS1.penalties.home > matchS1.penalties.away) ?? false ) {
    eliminationPhaseRounds[3].seeds[0].teams[0].name = matchS1.teams[0].name
    eliminationPhaseRounds[3].seeds[0].teams[0].flag = matchS1.teams[0].flag
  } else if ((matchS1.score.home < matchS1.score.away || matchS1.penalties.home < matchS1.penalties.away) ?? false) {
    eliminationPhaseRounds[3].seeds[0].teams[0].name = matchS1.teams[1].name
    eliminationPhaseRounds[3].seeds[0].teams[0].flag = matchS1.teams[1].flag
  }
  if((matchS2.score.home > matchS2.score.away || matchS2.penalties.home > matchS2.penalties.away) ?? false ) {
    eliminationPhaseRounds[3].seeds[0].teams[1].name = matchS2.teams[0].name
    eliminationPhaseRounds[3].seeds[0].teams[1].flag = matchS2.teams[0].flag
  } else if ((matchS2.score.home < matchS2.score.away || matchS2.penalties.home < matchS2.penalties.away) ?? false) {
    eliminationPhaseRounds[3].seeds[0].teams[1].name = matchS2.teams[1].name
    eliminationPhaseRounds[3].seeds[0].teams[1].flag = matchS2.teams[1].flag
  }


  return (
    <div className="bg-qatar bg-complete">
     <div className="pt-20 bg-transparent/[0.3] pb-20">
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Da Prode</em></h1>
        <div className='flex flex-col items-center sm:flex-row justify-center gap-8 mb-8'>
          <div onClick={handleGroupPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Fase de Grupos</strong></div>
          <div onClick={handleEliminationPhaseClick} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'><strong>Fase de Eliminatorias</strong></div>
        </div>
        {secondPhase?
        <div className="py-12 bg-transparent/[0.6] lg:mx-10 xl:mx-20 mb-12 rounded-lg 2xl:flex 2xl:justify-center 2xl:pl-60">
          <div className='overflow-x-auto'>
            <Bracket 
              mobileBreakpoint={0} 
              rounds={eliminationPhaseRounds} 
              renderSeedComponent={CustomSeed} 
              roundTitleComponent={(title, roundIndex) => {
                 return <div style={{ textAlign: 'center', color: '#eeeee5', paddingBottom: 40, fontSize: 20 }}>{title}</div>;
              }} />
          </div>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-4'>
          <Group group="Grupo A" countriesData={Countries.groupA} fixtureData={fixtureGroupA} set8vosFinals={set8vosFinalsA}/>
          <Group group="Grupo B" countriesData={Countries.groupB} fixtureData={fixtureGroupB} set8vosFinals={set8vosFinalsB}/>
          <Group group="Grupo C" countriesData={Countries.groupC} fixtureData={fixtureGroupC} set8vosFinals={set8vosFinalsC}/>
          <Group group="Grupo D" countriesData={Countries.groupD} fixtureData={fixtureGroupD} set8vosFinals={set8vosFinalsD}/>
          <Group group="Grupo E" countriesData={Countries.groupE} fixtureData={fixtureGroupE} set8vosFinals={set8vosFinalsE}/>
          <Group group="Grupo F" countriesData={Countries.groupF} fixtureData={fixtureGroupF} set8vosFinals={set8vosFinalsF}/>
          <Group group="Grupo G" countriesData={Countries.groupG} fixtureData={fixtureGroupG} set8vosFinals={set8vosFinalsG}/>
          <Group group="Grupo H" countriesData={Countries.groupH} fixtureData={fixtureGroupH} set8vosFinals={set8vosFinalsH}/>
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
                {seed.teams[0]?.flag? <img src={seed.teams[1]?.flag} alt={`flag`} className="w-14 max-h-full"/> : <div></div>}
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



