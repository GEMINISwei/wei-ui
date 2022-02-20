const { path } = require('@vuepress/utils')

module.exports = {
  title: "Wei UI",
  description: "Wei UI Demo",
  base: '/wei-ui/',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        text: '第一層',
        children: [
          { text: 'Input Text', link: '/input/input-text' },
          { text: 'Input Textarea', link: '/input/input-textarea' },
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../../src/'),
      },
    ],
  ],
}