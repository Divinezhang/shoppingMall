module.exports = {
  configureWebpack: {
    resolve: {
      // extentions: ['.vue'],
      // 配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'service': '@/service',
        'views': '@/views'
      }
    }
  }
}