// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import playformCompress from "@playform/compress";
import { siteConfig } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  base: siteConfig.base,
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        'ri': ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
      },
    })
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@cv']
    }
  }
});
