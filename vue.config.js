const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    publicPath:'./',    //添加
    assetsDir:'static',   //添加
    productionSourceMap:false, //编译过程不生成map文件
  transpileDependencies: true,
    // devServr:{  //解决跨域
    //   proxy:{
    //       "^/api":{       //以/api开头
    //           target:'https://i.maoyan.com'
    //       }
    //   }
    // },
  configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ]
    }

})
