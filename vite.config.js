import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import Path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
 //The resolve property in Vite lets you define path aliases, like '@' for src, to simplify imports, improve readability, and avoid long relative paths.
  resolve: {
    alias: {
      "@": Path.resolve(__dirname, "./src"),
    },
  },  
})
