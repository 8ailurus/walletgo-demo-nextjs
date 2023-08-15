const transpiler = require("next-transpile-modules")

const withTranspiler = transpiler([
  "@roninnetwork/walletgo",
  "@walletconnect/ethereum-provider",
  "@walletconnect/modal",
  "@safe-global/safe-apps-provider",
  "@safe-global/safe-apps-sdk",
])

module.exports = withTranspiler({
  images: {
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox; style-src 'none",
  },
})
