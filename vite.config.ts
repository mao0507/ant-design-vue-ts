import { loadEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// 自動引入 Icon
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // console.log('env value', env);
  return {
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
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      proxy: {
        '/api': env.VITE_API_URL ? env.VITE_API_URL : '',
      },
    },
    define: {
      'process.env': {},
    },
  };
});
