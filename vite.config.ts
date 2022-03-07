import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import monkeyPlugin from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkeyPlugin({
      entry: 'src/main.ts',
      userscript: {
        monkey: 'tamper',
        author: 'lisonge',
        name: 'op-wiki-plus',
        namespace: 'https://dev.songe.li',
        version: '1.0.0',
        icon: 'https://dev.songe.li/favicon.svg',
        description: '原神 Wiki 辅助工具, 1.显示/隐藏已完成成就',
        include: ['https://wiki.biligame.com/ys/*'],
        extra: [['license', 'MIT']],
      },
      format: {
        align: 2,
      },
      server: {
        prefix: 'dev:',
      },
      build: {
        externalGlobals: {
          vue: [
            'Vue',
            'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.prod.js',
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
