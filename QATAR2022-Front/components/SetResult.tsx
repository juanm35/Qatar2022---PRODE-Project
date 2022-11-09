import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import contractAbi from "../contractAbi.json";

export function SetResult() {

  const { config } = usePrepareContractWrite({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: contractAbi,
    functionName: "setResults",
    args: [[10, 20, 30], [0, 1, 2]],
    enabled: true,
  })

  const { data, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
      <strong>
        {isLoading ? 'Setting results...' : 'Set results'}
        {isSuccess && (
        <div>
          Successfully set!
        </div>
      )}
      </strong>
    </div>
  )
}