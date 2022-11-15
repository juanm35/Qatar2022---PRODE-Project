import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import contractAbi from "../contractAbi.json";
import {useState} from 'react'
import addressesData from "../addresses.json";

export function WhitelistUser() {

  const [input, setInput] = useState('')
 
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: addressesData.contractAddress,
    contractInterface: contractAbi,
    functionName: "whitelistUser",
    args: [input],
    enabled: true,
  })

  const { data, error, isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    // @ts-ignore
    <div onClick={write} className='text-qatarRed bg-qatarSilver rounded-lg p-3 w-60 text-center text-lg hover:bg-qatarRed hover:text-qatarSilver cursor-pointer'>
      <input type="text" onInput={e => setInput(e.target.value)}/>
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
      {(isError) && (
        <div>Error: {(error)?.message?.match(/reverted with custom error \'.*?\'/)}</div>
      )}
    </div>
  )
}