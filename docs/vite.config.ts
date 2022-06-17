import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

import path from "path";

export default defineConfig({
  plugins: [vueJsx({})],
  resolve:{
    alias:{
      '@comp':path.resolve(__dirname, 'src/components'),
    }
  }
})
