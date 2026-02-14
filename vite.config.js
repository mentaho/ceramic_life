import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalog: resolve(__dirname, "catalog.html"),
      },
    },
  },
  server: {
    open: true, // открывать браузер при старте
    browser: "chrome", // можно указать 'chrome', 'chrome.exe', 'google chrome', 'msedge', 'firefox' и т.д.
  },
});
