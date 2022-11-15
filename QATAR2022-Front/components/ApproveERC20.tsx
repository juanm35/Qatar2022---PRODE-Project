import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import { utils } from 'ethers'

export function ApproveERC20(props) {

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
    onSuccess(data) {
      props.approveSuccessFunction()
    },
  })
 
  return (
    <div className="flex flex-col items-center">
      <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
        <strong>
          {isLoading ? 'Aprobando...' : 'Aprobar DAI'}
        </strong>
      </div>
      <strong>
          {isSuccess && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-lg text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            Token aprobado!!! &#9989;
          </div>
        )}
        {isError && (
          <div className='text-qatarRed bg-qatarSilver w-fit text-lg md:text-lg text-center px-6 py-4 lg:py-4 rounded-full mx-auto mt-2'>
            Error al aprobar el token. &#10060;
          </div>
        )}
      </strong>
</div>
  )
}