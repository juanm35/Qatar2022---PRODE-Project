import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

export function WhitelistUser() {
 
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
    contractInterface: [
      {
        name: 'whitelistUser',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        outputs: [],
      },
    ],
    functionName: "whitelistUser",
    args: ["0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B"],
    enabled: true,
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
      <strong>
        {isLoading ? 'Whitelisting...' : 'Whitelist'}
        {isSuccess && (
        <div>
          Successfully whitelisted!
          <div>
            0x0EDd8AF763D0a7999f15623859dA9a0A786D1A9B
          </div>
        </div>
      )}
      </strong>
      {/*
      isPrepareError shows up when an error is found in the preparation of the transaction.
      isError shows up when clicking
        */}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message?.match(/reverted with custom error \'.*?\'/)}</div>
      )}
    </div>
  )
}