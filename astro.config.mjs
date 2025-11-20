// @ts-check
//astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://prof-gp.github.io/the-forensics-way/',
  base: '/the-forensics-way/',
  integrations: [
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'andromeeda',
      wrap: true,
      transformers: [{
        name: 'line-numbers',
      }]
    }
  }
});
