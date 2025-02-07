import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off", // Disable prop-types rule
      "react/jsx-no-target-blank": "off", // Disable warning on target="_blank" without rel="noopener noreferrer"
      "react-hooks/rules-of-hooks": "error", // Keep enforcing hooks rules
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": "off", // Disable no-console rule
      "no-alert": "off", // Disable no-alert rule
      "no-unused-vars": "off", // Disable unused-vars rule
      "no-debugger": "off", // Disable debugger rule
      "react/jsx-uses-react": "off", // Disable jsx-uses-react rule for newer React versions (since 17)
      "react/react-in-jsx-scope": "off", // Disable react-in-jsx-scope rule (for React 17+)
    },
  },
];
