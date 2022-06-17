import DefaultTheme from 'vitepress/theme'

// 注册几个 demoBlockPlugin 组件 将特殊格式转换成组件去显示
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
// 样式
import 'vitepress-theme-demoblock/theme/styles/index.css'

// 多文件注册
// const modules = import.meta.glob("../../../src/components/*.vue")

import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/test'
export default{
    ...DefaultTheme,
    // 扩展应用程序实例
    enhanceApp({app}){
        // 注册组件
        // register global components
        // app.component('MyGlobalComponent', /* ... */)
        // register global components
        app.component('HelloWorld', HelloWorld)
        app.component('Test', Test)
        app.component('DemoBlock', DemoBlock)
        app.component('Demo', Demo)
    }
}
