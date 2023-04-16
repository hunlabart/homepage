import { defineConfig } from "vite";
import path from 'path'
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import postCssPxToRem from "postcss-pxtorem";

const resolve = (dir) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    assetsDir: "./",
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 50,
          propList: ["*"],
        }),
      ],
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ["chrome < 60", "edge < 15"],
    }),
  ],
});
