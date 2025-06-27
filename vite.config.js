import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isLib = mode === 'library' && command === 'build';
  return {
    plugins: [react()],
    build: {
      outDir: isLib ? 'lib' : 'dist',
      lib: isLib
        ? {
            name: 'ImagesMview',
            entry: ['src/images-mview/index.jsx'],
            fileName: (format) => `images-mview.${format}.js`,
            cssFileName: 'images-mview',
          }
        : undefined,
      rollupOptions: isLib
        ? {
            external: ['react', 'react-dom', 'hammerjs', 'rc-queue-anim'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                hammerjs: 'Hammer',
                'rc-queue-anim': 'QueueAnim',
              },
            },
          }
        : undefined,
    },
  };
});
