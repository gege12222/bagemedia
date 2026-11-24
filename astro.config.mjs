// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bagemedia.hu',
  redirects: {
    '/projektek/tori24': { destination: '/tori24/', status: 301 },
  },
});
