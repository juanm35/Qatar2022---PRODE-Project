import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
 
export function MintNFT() {
  const { config } = usePrepareContractWrite({
    addressOrName: '0xee85d401835561De62b874147Eca8A4Fe1D5cBFf',
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