import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import litA11y from 'eslint-plugin-lit-a11y';
import globals from 'globals';

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    plugins: {
      unicorn,
      'lit-a11y': litA11y,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          tabWidth: 2,
          printWidth: 80,
          useTabs: false,
          trailingComma: 'es5',
          endOfLine: 'auto',
          semi: true,
          singleQuote: true,
        },
      ],
      'lit-a11y/alt-text': 2,
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'max-lines-per-function': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 2,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_*$',
          argsIgnorePattern: '^_*$',
        },
      ],
      '@typescript-eslint/no-explicit-any': 0,
      'block-spacing': 1,
    },
  },
];

export default eslintConfig;
