// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // 设置打包路径
    assetsInclude: ['**/*.glb'],
    build: {
        outDir: 'dist', // 设置输出目录
        rollupOptions: {
            input: {
                main: 'index.html',
            }
        }
    },
    server: {
        port: 4000,
        open: true,
        cors: true,
    }
})