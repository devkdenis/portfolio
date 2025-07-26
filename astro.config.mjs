// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  //site: 'https://devkdenis.github.io',
  //base: '/portfolio/',

  site: 'https://dev.krystelledenis.com',
  base: '/',
  output: 'static',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },
});
