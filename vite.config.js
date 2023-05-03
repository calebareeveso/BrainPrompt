import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  publicDir: path.join(__dirname, "public"),
  build: {
    outDir: path.join(__dirname, "build"),
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: "/src/app/index.js",
      template: "src/templates/index.html",
      inject: {
        data: {
          title: "[APP NAME]",
          injectScript: `<script type="module" src="./app/index.js"></script>`,
        },
        tags: [
          {
            injectTo: "body-prepend",
            tag: "main",
            attrs: {
              id: "root",
            },
          },
        ],
      },
    }),
  ],
});
