import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    server: { port: 9001 },
    preview: { port: 9001 },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    plugins: [
      vue({
        include: [/\.vue$/]
      }),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: null,
        workbox: {
          globPatterns: ["**/*.{js,css}"],
          navigateFallback: null
        },
        manifest: {
          name: "LumaNation",
          short_name: "LumaNation",
          description: "LumaNation",
          theme_color: "#906f41",
          background_color: "#906f41",
          display: "standalone",
          icons: [
            {
              src: "./pwa-icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "./pwa-icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "./pwa-icons/android-chrome-maskable-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "./pwa-icons/android-chrome-maskable-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "./pwa-icons/apple-touch-icon-60x60.png",
              sizes: "60x60",
              type: "image/png"
            },
            {
              src: "./pwa-icons/apple-touch-icon-76x76.png",
              sizes: "76x76",
              type: "image/png"
            },
            {
              src: "./pwa-icons/apple-touch-icon-120x120.png",
              sizes: "120x120",
              type: "image/png"
            },
            {
              src: "./pwa-icons/apple-touch-icon-152x152.png",
              sizes: "152x152",
              type: "image/png"
            },
            {
              src: "./pwa-icons/apple-touch-icon-180x180.png",
              sizes: "180x180",
              type: "image/png"
            },
            {
              src: "./pwa-icons/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png"
            },
            {
              src: "./pwa-icons/favicon-16x16.png",
              sizes: "16x16",
              type: "image/png"
            },
            {
              src: "./pwa-icons/favicon-32x32.png",
              sizes: "32x32",
              type: "image/png"
            },
            {
              src: "./pwa-icons/msapplication-icon-144x144.png",
              sizes: "144x144",
              type: "image/png"
            },
            {
              src: "./pwa-icons/mstile-150x150.png",
              sizes: "150x150",
              type: "image/png"
            }
          ]
        }
      })
    ],
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
    optimizeDeps: { include: ["cross-fetch"] }
  };
});
