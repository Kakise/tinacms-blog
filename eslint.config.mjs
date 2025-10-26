import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'

const eslintConfig = defineConfig([
  nextPlugin.configs['core-web-vitals'],
  // List of ignore patterns.
  globalIgnores([]),
])

export default eslintConfig