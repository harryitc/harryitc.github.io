// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://harryitc.github.io',
  base: '/', // Rất quan trọng
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
