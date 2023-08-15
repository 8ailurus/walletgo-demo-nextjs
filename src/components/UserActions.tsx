import { useWalletgo } from "@roninnetwork/walletgo"
import { BigNumber } from "ethers"
import { useState } from "react"
import { ButtonGhost } from "./ButtonGhost"

export const UserActions = () => {
  const { account, walletChainId, walletProvider, unsafeSwitchChain, deactivate } = useWalletgo()

  const [balance, setBalance] = useState<string>()

  const handleBalance = async () => {
    if (walletProvider && account) {
      const balance = await walletProvider.getBalance(account)

      setBalance(balance.toString())
    }
  }

  const handleSend = async () => {
    try {
      if (walletProvider && account) {
        walletProvider.getSigner().sendTransaction({
          from: account,
          to: "0xcd3cf91e7f0601ab98c95dd18b4f99221bcf0b20",
          value: BigNumber.from("100000000000000"),
        })
      }
    } catch (error) {
      console.debug(error)
    }
  }

  const handleChangeChain = () => {
    unsafeSwitchChain(2020)
  }

  return (
    <div className="flex flex-col gap-28 rounded-2x border border-solid border-tc-border p-20">
      <div className="flex flex-col">
        <p>
          <b>Account:</b> {account}
        </p>
        <p>
          <b>ChainId:</b> {walletChainId}
        </p>
        <p>
          <b>Balance:</b> {balance ? balance : "--"}
        </p>
      </div>

      <div className="flex gap-12">
        <ButtonGhost onClick={handleBalance} label="Fetch Balance" />

        <ButtonGhost onClick={handleSend} label="Send" />

        <ButtonGhost onClick={handleChangeChain} label="Set Ronin Mainnet" />

        <ButtonGhost onClick={deactivate} label="Disconnect" />
      </div>
    </div>
  )
}
