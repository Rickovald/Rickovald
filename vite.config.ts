import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tsconfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: "host",
    remotes: {
      drawer: "http://localhost:5173/assets/remoteEntry.js",
      blog: "http://localhost:5174/assets/remoteEntry.js",
    },
    shared: ["react", "react-dom"],
  }),],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  }
});
