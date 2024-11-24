// lint-staged.config.js
export default {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,md}': ['prettier --write'],
  // 根据需要配置其他文件类型的格式化和检查规则
}
