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
        name: '原神Wiki辅助工具',
        namespace: 'https://dev.songe.li',
        icon: 'https://dev.songe.li/favicon.svg',
        description: '原神 Wiki 辅助工具, 1.显示/隐藏已完成成就',
        updateURL:
          'https://cdn.jsdelivr.net/gh/lisonge/op-wiki-plus@main/dist/op-wiki-plus.user.js',
        supportURL: 'https://github.com/lisonge/op-wiki-plus/issues',
        include: ['https://wiki.biligame.com/ys/*'],
      },
      build: {
        externalGlobals: {
          vue: [
            'Vue',
            (version) =>
              `https://cdn.jsdelivr.net/npm/vue@${version}/dist/vue.global.prod.js`,
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
