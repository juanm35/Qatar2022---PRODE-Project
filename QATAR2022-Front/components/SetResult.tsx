import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import contractAbi from "../contractAbi.json";
import {useState, useEffect} from 'react'
import addressesData from '../addresses.json'

export function SetResult(props: any) {

  useEffect(() => console.log("PACKED RESULT: ", props.guess),[])

  const { config } = usePrepareContractWrite({
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: "setResults",
    args: [props.guess.results, props.guess.ids],
    enabled: true,
  })

  const { data, write } = useContractWrite(config)
 
  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div >
      <div onClick={write} className={`text-qatarRed bg-qatarSilver mx-auto cursor-pointer shadow-xl rounded-lg text-2xl md:text-4xl w-fit px-6 py-8 text-center  ${props.messiRole?"hover:bg-qatarGold":"hover:bg-qatarRed"} hover:text-white hover:border-solid-white hover:border-2`}>
          <strong>{isLoading ? "Enviando..." : (props.messiRole?"Setear Resultados":"¡Enviar Pronóstico!")}</strong>
          <div className="text-sm underline">Fase de {props.secondPhase? "Eliminatorias" : "Grupos"}</div>
      </div>
      <div>
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
      </div>
    </div>
  )
}