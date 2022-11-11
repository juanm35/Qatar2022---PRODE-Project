import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import contractAbi from "../contractAbi.json";
import {useState} from 'react'

export function SetResult(props: any) {

  const [pack, setPack] = useState({"results": [], "ids": []})
  function printPack(){
    // const {results, ids} = props.packProde()
    // setPack({results, ids})
    // console.log("PACKED RESULTS: ", {results, ids}, {"results2":pack.results, "ids2": pack.ids})
  }

  const { config } = usePrepareContractWrite({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: contractAbi,
    functionName: "setResults",
    args: [pack.results, pack.ids],
    enabled: true,
  })

  const { data, write } = useContractWrite(config)
 
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div onClick={printPack}>
      <div onClick={() => {setPack(props.packProde()) ; console.log("esaga", pack) ;write?.()}} className={`text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  ${props.messiRole?"hover:bg-qatarGold":"hover:bg-qatarRed"} hover:text-white hover:border-solid-white hover:border-2`}>
          <strong>{isLoading ? "Enviando..." : (props.messiRole?"Setear Resultados":"¡Enviar Pronóstico!")}</strong>
          <div className="text-sm underline">Fase de Grupos</div>
      </div>
      <strong>
          {isSuccess && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            Resultados enviados exitosamente!!! &#9989;
          </div>
        )}
        {isError && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            La transacción no se completo correctamente. &#10060;
          </div>
        )}
      </strong>
    </div>
  )
}