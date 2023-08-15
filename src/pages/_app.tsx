import "src/styles/global.css"

import { WalletgoProvider } from "@roninnetwork/walletgo"
import App, { AppContext, AppProps } from "next/app"
import Head from "next/head"
import { WidgetOpenProvider } from "src/components/WalletConnect"

const NextApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Ronin Playground</title>

        <link rel="shortcut icon" href="https://cdn.skymavis.com/explorer-cdn/asset/fav.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="skymavis.com" />
        <meta name="keywords" content="walletgo, ronin-ui, ronin playground" />

        <meta key="og:title" property="og:title" content="Ronin Playground" />
        <meta property="og:site_name" content="Ronin Playground" />
        <meta property="og:type" content="website" />

        <meta
          key="og:image"
          property="og:image"
          content="https://cdn.skymavis.com/explorer-cdn/asset/og/explorer.png"
        />
        <meta
          key="og:image:url"
          property="og:image:url"
          content="https://cdn.skymavis.com/explorer-cdn/asset/og/explorer.png"
        />
        <meta key="og:image:alt" property="og:image:alt" content="Visit roninchain.com" />
      </Head>

      <WalletgoProvider defaultChainId={2020}>
        <WidgetOpenProvider>
          <Component {...pageProps} />
        </WidgetOpenProvider>
      </WalletgoProvider>
    </>
  )
}

NextApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context)
  return ctx
}

export default NextApp
