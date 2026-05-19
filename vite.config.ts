import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repo = "cisc480portfolio";

export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES === "true" ? `/${repo}/` : "/",
});
