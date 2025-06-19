import path from "path";
import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import jsEslint from "@eslint/js";
import love from "eslint-config-love";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsdoc from "eslint-plugin-jsdoc";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: jsEslint.configs.recommended,
});

export default tsEslint.config(
  // @ts-expect-error -- idk what happened here
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
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },

  // Rules for files within the `src` folder
  {
    files: ["src/**"],
    extends: [
      eslintPluginReact.configs.flat.recommended,
      eslintPluginJsdoc.configs["flat/recommended-typescript"],
      eslintPluginJsdoc.configs["flat/stylistic-typescript"],
    ],
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unsafe-type-assertion": "off",
      "@typescript-eslint/prefer-destructuring": "off",
      "react/react-in-jsx-scope": "off",
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: true,
          ignorePattern: [],
          groups: [
            "className",
            "style",
            "id",
            "name",
            "data",
            "src",
            "for",
            "type",
            "placeholder",
            "href",
            "value",
            "title",
            "alt",
            "role",
            "aria",
            "tabIndex",
            "unknown",
            "callback",
            "shorthand",
            "multiline",
          ],
          customGroups: {
            className: "className",
            id: "id",
            name: "name",
            data: "^data-.+",
            src: "src",
            for: "for",
            type: "type",
            placeholder: "placeholder",
            href: "href",
            value: "value",
            title: "title",
            alt: "alt",
            role: "role",
            aria: "^aria-.+",
            tabIndex: "tabIndex",
            style: "style",
            callback: "^on.+",
          },
        },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
);
