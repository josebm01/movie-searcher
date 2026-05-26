import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs22.x'
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [react()]
});