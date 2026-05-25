import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Change this line right here!

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // This now points to the correct @tailwindcss/vite plugin
  ],
})