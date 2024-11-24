// eslint.config.js文件
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // 启用 Node.js 全局变量
      },
    },
  },
  // 忽略某些文件或目录
  {
    ignores: ['node_modules', 'dist'], // 忽略这些目录和文件
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
]
