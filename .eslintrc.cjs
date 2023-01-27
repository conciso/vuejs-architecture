/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["dist", "node_modules"],
  rules: {
    "prettier/prettier": ["error"],
    // Fix annoying CRLF vs LF error.
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
  },
  overrides: [
    {
      files: ["**/*.{ts,vue}"],
    },
  ],
};
