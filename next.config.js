const transpiler = require("next-transpile-modules")
const bundleAnalyzer = require("@next/bundle-analyzer")

const withTranspiler = transpiler([
  "@roninnetwork/walletgo",
  "@safe-global/safe-apps-provider",
  "@safe-global/safe-apps-sdk",
])

const withBundleAnalyzer = bundleAnalyzer({
  enabled: false,
})

module.exports = withBundleAnalyzer(
  withTranspiler({
    images: {
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox; style-src 'none",
    },
  }),
)
