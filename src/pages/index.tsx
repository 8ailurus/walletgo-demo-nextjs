import {
  ConnectButton,
  RoninExtConnector,
  SupportedChainIds,
  WalletWidget,
  createDefaultWallets,
  useWalletgo,
} from "@roninnetwork/walletgo"
import { NextPage } from "next"
import { ButtonPrimary } from "src/components/ButtonPrimary"
import { UserActions } from "src/components/UserActions"
import { useWidgetOpen } from "src/components/WalletConnect"

const WalletGo: NextPage = () => {
  const { connected, activate } = useWalletgo()
  const { showWidget, setShowWidget } = useWidgetOpen()

  return (
    <>
      <WalletWidget
        isOpen={showWidget}
        handleClose={() => setShowWidget(false)}
        wallets={createDefaultWallets({
          clientMeta: {
            name: "App.Ronin",
            description: "App.Ronin",
            icons: ["https://cdn.skymavis.com/explorer-cdn/asset/favicon/apple-touch-icon.png"],
            url: "https://app.roninchain.com",
          },
          defaultChainId: SupportedChainIds.RoninTestnet,
        })}
        dialogProps={{
          mask: true,
        }}
      />

      <div className="mt-48 flex h-screen w-screen flex-col items-center justify-start gap-40">
        <h1 className="text-[36px] leading-[42px] font-semibold">Wallet Connect</h1>

        <div className="flex flex-col items-center gap-12">
          <ConnectButton onClick={() => setShowWidget(true)} />
          <ButtonPrimary
            onClick={() => {
              activate(RoninExtConnector.create({}))
            }}
            label="Connect To Ronin Wallet Ext"
          />
        </div>

        {connected && <UserActions />}
      </div>
    </>
  )
}

export default WalletGo
