import { createDefaultWallets, WalletWidget } from "@roninnetwork/walletgo"
import React, { createContext, ReactNode, useContext, useState } from "react"

export interface IWidgetOpenContext {
  showWidget: boolean
  setShowWidget: (showWidget: boolean) => void
}

export const WidgetOpenContext = createContext<IWidgetOpenContext>({
  showWidget: false,
  setShowWidget: (_showWidget: boolean) => {},
})

export const WidgetOpenProvider = ({ children }: { children: ReactNode }) => {
  const [showWidget, setShowWidget] = useState(false)

  return (
    <WidgetOpenContext.Provider value={{ showWidget, setShowWidget }}>
      {children}
    </WidgetOpenContext.Provider>
  )
}

export const useWidgetOpen = () => useContext(WidgetOpenContext)
