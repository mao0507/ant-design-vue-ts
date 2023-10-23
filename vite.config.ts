import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自動引入 Icon
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({ compiler: 'vue3' }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['ant-design'],
          alias: {
            ant: 'ant-design',
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': process.env.VUE_APP_RESOURCE_API ? process.env.VUE_APP_RESOURCE_API : '',
    },
  },
  define: {
    'process.env': {},
  },
})
