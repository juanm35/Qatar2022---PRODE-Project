import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import Group from '../components/Group'

export default function Home() {

  const fixtureGroupA =  Fixture.data.filter((match) => match.Group === "groupA");
  const fixtureGroupB =  Fixture.data.filter((match) => match.Group === "groupB");
  const fixtureGroupC =  Fixture.data.filter((match) => match.Group === "groupC");
  const fixtureGroupD =  Fixture.data.filter((match) => match.Group === "groupD");
  const fixtureGroupE =  Fixture.data.filter((match) => match.Group === "groupE");
  const fixtureGroupF =  Fixture.data.filter((match) => match.Group === "groupF");
  const fixtureGroupG =  Fixture.data.filter((match) => match.Group === "groupG");
  const fixtureGroupH =  Fixture.data.filter((match) => match.Group === "groupH");

  return (
    <div className="bg-qatar bg-complete">
     <div className="pt-20 bg-transparent/[0.3]">
        <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Da Prode</em></h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <Group group="Grupo A" countriesData={Countries.groupA} fixtureData={fixtureGroupA}/>
          <Group group="Grupo B" countriesData={Countries.groupB} fixtureData={fixtureGroupB}/>
          <Group group="Grupo C" countriesData={Countries.groupC} fixtureData={fixtureGroupC}/>
          <Group group="Grupo D" countriesData={Countries.groupD} fixtureData={fixtureGroupD}/>
          <Group group="Grupo E" countriesData={Countries.groupE} fixtureData={fixtureGroupE}/>
          <Group group="Grupo F" countriesData={Countries.groupF} fixtureData={fixtureGroupF}/>
          <Group group="Grupo G" countriesData={Countries.groupG} fixtureData={fixtureGroupG}/>
          <Group group="Grupo H" countriesData={Countries.groupH} fixtureData={fixtureGroupH}/>
        </div>
      </div>
    </div>
  )
}
