import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/deploy-react-vite/"
})

//VIDEO DONDE SE EXPLICA CORRECTAMENTE EL DEPLOY DE REAC A GITHUB PAGES
// https://www.youtube.com/watch?v=igCO5i4NnfU