import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // plugins: [react()],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      // '@': path.resolve(__dirname, 'src'),
    },
    // alias: {
    //   //! Иерархия зависемостей, импорты разрешены из директории выше в директории ниже
    //   'app': path.resolve('src/app'),
    //   'processes': path.resolve('src/processes'),
    //   'pages': path.resolve('src/pages'),
    //   'widgets': path.resolve('src/widgets'),
    //   'features': path.resolve('src/features'),
    //   'entities': path.resolve('src/entities'),
    //   'shared': path.resolve('src/shared'),
    // },
    extensions: ['.ts', '.tsx', '.js'],
  }
});
