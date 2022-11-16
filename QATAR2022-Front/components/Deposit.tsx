import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import contractAbi from "../contractAbi.json";
import addressesData from "../addresses.json";

export function Deposit(props) {

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: "deposit",
    args: [],
    enabled: true,
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      props.depositSuccessFunction()
    },
  })
 
  return (
    <div>
      <div onClick={write} className={`${props.tokenApproved? '' : "hidden"} text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer`}>
        <strong>
          {isLoading ? 'Enviando...' : 'Inscribirse'}
          <div>15.00 DAI</div>
        </strong>
      </div>
      <div className={`${props.tokenApproved? 'hidden' : ''} text-gray-400 bg-gray-200 rounded-lg p-3 w-60 text-center text-lg cursor-pointer`}>
        <div>Inscribirse</div><div>15.00 DAI</div>
      </div>
      <div>
          {isSuccess && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            Depósito enviados exitosamente!!! &#9989;
          </div>
        )}
        {isError && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-2xl text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            El depósito no se envió correctamente. &#10060;
          </div>
        )}
      </div>
    </div>
  )
}