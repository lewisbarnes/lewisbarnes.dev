import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			external: ["svgo",]
		},
	},
	markdown: {
    shikiConfig: {
      theme: "poimandres",
      wrap: true,
    },
  },
  integrations: [tailwind()]
});