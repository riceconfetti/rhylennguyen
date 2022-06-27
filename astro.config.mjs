import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), sitemap()]
});