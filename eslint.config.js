import js from "@eslint/js";
import prettier from 'eslint-config-prettier';
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  prettier
]);
