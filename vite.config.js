import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-basics/', // For GitHub Pages
  plugins: [react()],
});
