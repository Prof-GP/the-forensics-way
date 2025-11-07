// @ts-check
//astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://rmondgp.github.io',
  base: '/The-Forensics-Way',
  integrations: [
    mdx(),
  ],
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
