import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Resolve paths for `extends`
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Convert traditional config
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Apply to JS/TS files
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // Example: Custom rule
    },
  },
];

export default eslintConfig;
