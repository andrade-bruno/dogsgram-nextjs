import { FlatCompat } from "@eslint/eslintrc";
import lintRc from "./.eslintrc.json";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
    rules: lintRc.rules,
  }),
];

export default eslintConfig;
