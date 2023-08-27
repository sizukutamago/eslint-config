module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "google",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "import", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "require-jsdoc": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
