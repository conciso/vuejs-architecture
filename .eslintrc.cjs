require("@rushstack/eslint-patch/modern-module-resolution");

/* eslint-env node */
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  plugins: ["import", "prettier"],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-essential",
    // When this is active eslint complains.
    // "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-typescript",
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

    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],

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

          {
            target: "apps/frontend/**/components/*",
            from: "**/stores/*",
            message: "Components should not import stores.",
          },
        ],
      },
    ],
  },
  // overrides: [
  //   {
  //     files: ["**/*.{ts,vue}"],
  //   },
  // ],
};
