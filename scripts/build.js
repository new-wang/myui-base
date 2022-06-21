// 方法一 https://vitejs.dev/guide/build.html#library-mode

// 方法二：可以自己手动配置
// 引入vite导出的build方法，用它来创建
const path = require('path');
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx');
const fsExtra = require('fs-extra');
const version = require('../package.json').version;

// 基础配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// rollup配置
const rollupOptions = {
    // 外置
    external: ['vue', 'vue-router'],
    output: {
      globals: {
        vue: 'Vue'
      }
    }
}

// 生成package.json
const createPackageJson = () => {
    // 预设
    const fileStr = `{
      "name": "${name ? name : 'myui-base'}",
      "version": "${version}",
      "main": "${name ? 'index.umd.js' : 'myui-base.umd.js'}",
      "module": "${name ? 'index.umd.js' : 'myui-base.es.js'}",
      "author": "wx follow 杨村长",
      "description": "第一个组件库Myui-base，以后组件库能不能建好就看它了！",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/new-wang/myui-base.git"
      },
      "keywords": ["vue3", "组件库", "tsx", "UI"],
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/new-wang/myui-base/issues"
      }
    }`
  
    // 全量
    fsExtra.outputFile(
        path.resolve(outputDir, 'package.json'),
        fileStr,
        'utf-8'
      )
  }

// 执行创建
// 全量构建
const buildAll = async () => {
    await build(
      defineConfig({
        ...baseConfig,
        build: {
          rollupOptions,
          lib: {
            entry: entryFile,
            name: 'myui-base',
            fileName: 'myui-base',
            formats: ['es', 'umd']
          },
          outDir: outputDir
        }
      })
    )

    // 生成pacekage.json
    createPackageJson()
 }

const buildLib = async () => {
    await buildAll()
}
  
buildLib()