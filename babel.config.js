module.exports = {
  presets: [
    '@vue/app'
  ],
  //这里按照的事babel官网的配置进行配置的，这里配置的是实现按需加载
  "plugins": [
    ["component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}