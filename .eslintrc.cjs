/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: ["**/dist/*", "**/node_modules/*"],
  rules: {
    "prettier/prettier": ["error"],
    // Fix annoying CRLF vs LF error.
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],

    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "apps/backend/",
            from: "apps/frontend/",
            message: "Backend should not import from frontend. Move code to libs and import from there instead.",
          },
          {
            target: "apps/frontend/",
            from: "apps/backend/",
            message: "Frontend should not import from backend. Move code to libs and import from there instead.",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.{ts,vue}"],
    },
  ],
};
