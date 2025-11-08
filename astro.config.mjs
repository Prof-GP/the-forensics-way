// @ts-check
//astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://RMondGP.github.io/',
  integrations: [
    mdx(),
  ],
  build: {
    assets: 'assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark-hard',
      wrap: true,
      transformers: [{
        name: 'line-numbers',
      }]
    }
  }
});
