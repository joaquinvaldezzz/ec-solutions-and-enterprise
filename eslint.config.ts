import path from "path";
import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import jsEslint from "@eslint/js";
import love from "eslint-config-love";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: jsEslint.configs.recommended,
});

export default tsEslint.config(
  includeIgnoreFile(path.resolve(".gitignore")),

  // Rules for all files
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
    extends: [
      jsEslint.configs.recommended,
      tsEslint.configs.recommended,
      ...compat.config({
        extends: ["next"],
      }),
      love,
      eslintPluginPrettier,
      eslintConfigPrettier,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },

  // Rules for files within the `src` folder
  {
    files: ["src/**"],
    extends: [eslintPluginReact.configs.flat.recommended],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/prefer-destructuring": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
);
