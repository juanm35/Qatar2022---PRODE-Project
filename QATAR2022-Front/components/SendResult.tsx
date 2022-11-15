import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import addressesData from '../addresses.json'
 
export function MintNFT() {
  const { config } = usePrepareContractWrite({
    addressOrName: addressesData.contractAddress,
    contractInterface: [
      {
        name: 'whitelistUser',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address"
            }
        ],
        outputs: [],
      },
    ],
    functionName: 'whitelistUser',
  })
  const { data, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </div>
  )
}