import ResultsTable from '../../components/ResultsTable'

export default function Resultados() {  
    return (
      <div className=" bg-qatar bg-complete">
        <div className="pt-20 bg-transparent/[0.3]">
          <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Resultados</em></h1> 
          <ResultsTable/>  
          <div className="h-96"></div>
          <div className="h-96"></div>     
        </div>
      </div>
    )
  }