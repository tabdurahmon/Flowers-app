import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      screens: path.resolve(__dirname, "./src/screens"),
      components: "src/components",
    },
  },
});
