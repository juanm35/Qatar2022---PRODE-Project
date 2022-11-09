import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import { utils } from 'ethers'

export function ApproveERC20() {

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    // MockToken address
    addressOrName: '0xF5aA8e3C6BA1EdF766E197a0bCD5844Fd1ed8A27',
    // ERC20 token interface for approving a token
    contractInterface: [
      {
        name: 'approve',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
          { internalType: "address", name: "spender", type: "address"},
          { internalType: "uint256", name: "amount", type: "uint256"}
        ],
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
      },
    ],
    functionName: "approve",
    // Hardcoded prode contract address and 50 tokens (when deposit amount is defined we change it)
    args: ["0xee85d401835561De62b874147Eca8A4Fe1D5cBFf", utils.parseEther("50")],
    enabled: true,
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
      <strong>
        {isLoading ? 'Approving...' : 'Approve token'}
        {isSuccess && (
        <div>
          Successfully approved!
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
        <div>Error: {(prepareError || error)?.message?.match(/reverted with custom error \'.*?\'/)}</div>
      )}
    </div>
  )
}