// @ts-check
//astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.theforensicsway.com/',
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