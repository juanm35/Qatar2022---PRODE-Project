import Countries from '../data/countriesData.json'
import Fixture from '../data/fixtureData.json'
import Group from '../components/Group'

export default function Home() {

  const fixtureGroupA =  Fixture.data.filter((match) => match.Group === "Group A");
  const fixtureGroupB =  Fixture.data.filter((match) => match.Group === "Group B");
  const fixtureGroupC =  Fixture.data.filter((match) => match.Group === "Group C");
  const fixtureGroupD =  Fixture.data.filter((match) => match.Group === "Group D");
  const fixtureGroupE =  Fixture.data.filter((match) => match.Group === "Group E");
  const fixtureGroupF =  Fixture.data.filter((match) => match.Group === "Group F");
  const fixtureGroupG =  Fixture.data.filter((match) => match.Group === "Group G");
  const fixtureGroupH =  Fixture.data.filter((match) => match.Group === "Group H");

  return (
    <div className="bg-qatar bg-complete">
     <div className="pt-20 bg-transparent/[0.3]">
        <h1 className='text-white text-4xl md:text-8xl w-full text-center pt-16'><em>Da PRODE</em></h1>
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
