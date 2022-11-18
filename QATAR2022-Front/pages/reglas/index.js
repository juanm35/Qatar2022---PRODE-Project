import ReglasComponent from '../../components/Reglas'

export default function Reglas() {  
    return (
      <div className=" bg-qatar bg-complete">
        <div className="py-20 bg-transparent/[0.3] min-h-screen pb-28">
          <h1 className='text-white text-6xl md:text-8xl w-full text-center pt-12 pb-12'><em>Reglas</em></h1>   
          <ReglasComponent/>     
        </div>
      </div>
    )
  }