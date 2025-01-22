import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Suppresses unused variables warning
      "react-hooks/exhaustive-deps": "off", // Suppresses dependency array warnings
      "prefer-const": "off", // Suppresses const preference warnings
      "@next/next/no-html-link-for-pages": "off", // Suppresses HTML link usage warnings
    },
  },
];

export default eslintConfig;
