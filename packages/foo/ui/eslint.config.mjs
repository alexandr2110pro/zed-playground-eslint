import nx from '@nx/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

import baseConfig from '../../../eslint.config.mjs';

const eslintConfig = defineConfig([
  ...baseConfig,
  ...nextVitals,
  ...nx.configs['flat/react-typescript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 1 }],
    },
  },

  {
    ignores: ['**/out-tsc'],
  },
]);

export default eslintConfig;
