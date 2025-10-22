import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactCompilerPlugin from 'eslint-plugin-react-compiler'
import pluginQuery from '@tanstack/eslint-plugin-query'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import globals from 'globals'

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'tina/__generated__/**',
      'public/**',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  ...reactHooksPlugin.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    name: 'react-compiler/recommended',
    plugins: {
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
]

export default eslintConfig
