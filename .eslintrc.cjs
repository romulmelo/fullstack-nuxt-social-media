module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "vue", "nuxt"],
  rules: {
    "prettier/prettier": "error",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off"
  }
}
