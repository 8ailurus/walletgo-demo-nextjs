const prettierConfig = require("./config/prettier.cjs")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: true,
  },

  plugins: ["simple-import-sort", "import"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",

    "no-console": [
      "error",
      {
        allow: ["debug", "error"],
      },
    ],

    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-key": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/react-in-jsx-scope": "off",

    "sort-imports": "off",
    "import/order": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "prettier/prettier": ["error", prettierConfig],
  },

  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
  },

  root: true,

  ignorePatterns: [".swc", ".next", "out", "node_modules", "contracts"],
}
