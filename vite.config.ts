import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import tsconfigPaths from 'vite-tsconfig-paths';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     //! Иерархия зависемостей, импорты разрешены из директории выше в директории ниже
  //     'app': path.resolve(__dirname, 'src/app'),
  //     'processes': path.resolve(__dirname, 'src/processes'),
  //     'pages': path.resolve(__dirname, 'src/pages'),
  //     'widgets': path.resolve(__dirname, 'src/widgets'),
  //     'features': path.resolve(__dirname, 'src/features'),
  //     'entities': path.resolve(__dirname, 'src/entities'),
  //     'shared': path.resolve(__dirname, 'src/shared'),
  //   }
  // }
});
