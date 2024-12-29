// vite.config.ts
import { defineConfig } from "file:///C:/Users/volon/Desktop/react/react-universal-video/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.2/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/volon/Desktop/react/react-universal-video/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@5.4.11_@types+node@22.10.2_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/volon/Desktop/react/react-universal-video/node_modules/.pnpm/vite-plugin-dts@4.4.0_@types+node@22.10.2_rollup@4.29.1_typescript@5.6.3_vite@5.4.11_@types+node@22.10.2_/node_modules/vite-plugin-dts/dist/index.mjs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
var __vite_injected_original_import_meta_url = "file:///C:/Users/volon/Desktop/react/react-universal-video/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@lib": resolve(__dirname, "./src/lib"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@ui": resolve(__dirname, "./src/components/ui")
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VideoPlayer",
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`
    },
    rollupOptions: {
      external: ["react", "react-dom", "video.js"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "video.js": "videojs"
        }
      }
    }
  },
  server: { port: 3e3 }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2b2xvblxcXFxEZXNrdG9wXFxcXHJlYWN0XFxcXHJlYWN0LXVuaXZlcnNhbC12aWRlb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdm9sb25cXFxcRGVza3RvcFxcXFxyZWFjdFxcXFxyZWFjdC11bml2ZXJzYWwtdmlkZW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3ZvbG9uL0Rlc2t0b3AvcmVhY3QvcmVhY3QtdW5pdmVyc2FsLXZpZGVvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKHsgaW5jbHVkZTogW1wic3JjXCJdIH0pXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuICAgICAgXCJAbGliXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYlwiKSxcclxuICAgICAgXCJAaG9va3NcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvaG9va3NcIiksXHJcbiAgICAgIFwiQHVpXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbXBvbmVudHMvdWlcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxyXG4gICAgICBuYW1lOiBcIlZpZGVvUGxheWVyXCIsXHJcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXQgPT09IFwiZXNcIiA/IFwibWpzXCIgOiBcImpzXCJ9YCxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInZpZGVvLmpzXCJdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgICAgICAgXCJ2aWRlby5qc1wiOiBcInZpZGVvanNcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZlcjogeyBwb3J0OiAzMDAwIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsb0JBQW9CO0FBQ2pYLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxTQUFTLGVBQWU7QUFKc0wsSUFBTSwyQ0FBMkM7QUFNeFEsSUFBTSxhQUFhLGNBQWMsd0NBQWU7QUFDaEQsSUFBTSxZQUFZLFFBQVEsVUFBVTtBQUVwQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQzVDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxXQUFXLE9BQU87QUFBQSxNQUMvQixlQUFlLFFBQVEsV0FBVyxrQkFBa0I7QUFBQSxNQUNwRCxRQUFRLFFBQVEsV0FBVyxXQUFXO0FBQUEsTUFDdEMsVUFBVSxRQUFRLFdBQVcsYUFBYTtBQUFBLE1BQzFDLE9BQU8sUUFBUSxXQUFXLHFCQUFxQjtBQUFBLElBQ2pEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLFdBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsV0FBVyxPQUFPLFFBQVEsSUFBSTtBQUFBLElBQy9EO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLFVBQVU7QUFBQSxNQUMzQyxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUSxFQUFFLE1BQU0sSUFBSztBQUN2QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
