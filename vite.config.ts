import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx({})],
  resolve:{
    alias:{
      '@docs':path.resolve(__dirname, 'docs'),
      '@style':path.resolve(__dirname, 'src/style'),
      '@comp':path.resolve(__dirname, 'src/components'),
    }
  }
})
