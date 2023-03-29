import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun';
import vue from '@vitejs/plugin-vue'
// console.log('qiankun=', qiankun)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('adcreate', {
      useDevMode: true
    })
  ],
  base: '/',
  // build: {
  //   lib: {
  //     entry: '',
  //     formats: ['umd']
  //   }
  // }
})
