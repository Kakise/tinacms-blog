import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';
import pluginQuery from '@tanstack/eslint-plugin-query';

const eslintConfig = [
  js.configs.recommended,
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
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  ...pluginQuery.configs['flat/recommended'],
  {
    name: 'react-compiler/recommended',
    plugins: {
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
];

export default eslintConfig;