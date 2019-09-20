module.exports = {
  presets: [
    '@vue/app'
  ],
  //这里按照的事babel官网的配置进行配置的
  "plugins": [
    ["component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}