import nx from '@nx/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';

import baseConfig from '../../eslint.config.mjs';

const eslintConfig = defineConfig([
  ...baseConfig,
  ...nextVitals,
  ...nx.configs['flat/react-typescript'],
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
