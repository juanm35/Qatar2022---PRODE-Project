import Countries from '../../data/countriesData.json'
import Fixture from '../../data/fixtureData.json'
import ProdeRoundCard from '../../components/ProdeRoundCard'

export default function Home() {  
  return (
    <div className=" bg-qatar bg-complete">
      <div className="pt-20 bg-transparent/[0.3]">
        <h1 className='text-white text-4xl md:text-8xl w-full text-center pt-12 pb-12'><em>Mi Prode</em></h1>
        <ProdeRoundCard matches={Fixture.data} countriesData={Countries}/>
        <div className="h-96"></div>
        <div className="h-96"></div>     
      </div>
    </div>
  )
}