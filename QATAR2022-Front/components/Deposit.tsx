import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

export function Deposit() {

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: [
      {
        name: 'deposit',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "deposit",
    args: [],
    enabled: true,
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
      <strong>
        {isLoading ? 'Depositing...' : 'Deposit token'}
        {isSuccess && (
        <div>
          Successfully deposit!
          <div>
            50 Tokens
          </div>
        </div>
      )}
      </strong>
      {/*
      isPrepareError shows up when an error is found in the preparation of the transaction.
      isError shows up when clicking
        */}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message?.match(/.*?/)}</div>
      )}
    </div>
  )
}