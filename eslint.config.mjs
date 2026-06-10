import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tailwindDesignTokens from 'eslint-plugin-tailwind-design-tokens';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-nested-ternary': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration > FunctionDeclaration',
          message: 'Declare the function first, then export default as a separate line at the end.',
        },
      ],
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/extensions': ['error', 'never'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react-dom', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'function-expression',
        },
      ],
      'import/prefer-default-export': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'tailwind-design-tokens': tailwindDesignTokens,
    },
    rules: {
      'tailwind-design-tokens/no-default-palette': 'error',
      'tailwind-design-tokens/no-hardcoded-colors': ['error', { cssFile: './app/globals.css' }],
    },
  },
  {
    // og image renderer/icon use literal hex (satori can't read oklch tokens);
    // projectDetails holds color literals as case-study example content, not UI.
    files: ['lib/og.tsx', 'app/icon.tsx', 'app/config/projectDetails.ts'],
    rules: {
      'tailwind-design-tokens/no-default-palette': 'off',
      'tailwind-design-tokens/no-hardcoded-colors': 'off',
    },
  },
  prettierConfig,
]);
