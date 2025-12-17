const prettierConfig = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'avoid',
  printWidth: 80,
  proseWrap: 'always',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],
  importOrder: [
    '^server-only$',
    '<THIRD_PARTY_MODULES>',
    '^@org\\/',
    '^\\.\\./',
    '^\\./',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindStylesheet: './apps/web/app/global.css',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  customFunctions: ['clsx', 'cn', 'cva'],
  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

export default prettierConfig;
