import nx from '@nx/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

import baseConfig from '../../../eslint.config.mjs';

const eslintConfig = defineConfig([
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  ...nextVitals,
  {
    ignores: ['**/out-tsc'],
  },
]);

export default eslintConfig;
