import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://places-service-copy-8lw5s0fq.uc.gateway.dev',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
