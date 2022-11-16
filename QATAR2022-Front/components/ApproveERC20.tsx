import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import { utils } from 'ethers'
import addressesData from'../addresses.json'

export function ApproveERC20(props) {

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    // MockToken address
    addressOrName: addressesData.tokenAddress,
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
    args: [addressesData.contractAddress, utils.parseEther("50")],
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