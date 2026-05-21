import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  // Spread the Next.js recommended config
  ...nextVitals,

  // Override rules
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },

  // Define global ignores to improve performance
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
