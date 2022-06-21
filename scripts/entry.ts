// 入口文件
// 1、引入实现的组件批量导出去
import type { App } from 'vue';
import ButtonPlugin, { Button } from '../src/button';
// 2、导出这些组件
export { Button }
// 3、导出一个vue组件
const installs = [ButtonPlugin]
export default {
    install(app:App) {
        installs.forEach(p => app.use(p))
    }
}