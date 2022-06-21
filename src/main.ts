import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
import Button from './button';

// 使用全量导出
// import Myui from '../build/myui-base.es.js';
import Myui from '../build/';


createApp(App)
.use(Myui)
// .use(Button)
.mount('#app')
