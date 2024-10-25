import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // inhabilitando devtools de astro
  devToolbar: {
    enabled: false
  },
  integrations: [react()]
});