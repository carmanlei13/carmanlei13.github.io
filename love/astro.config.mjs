// @ts-check
import { defineConfig } from 'astro/config';
import mithril from '@pioleong/astro-mithril'

import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Enable Mithril to support Mithril JSX components.
  integrations: [mithril()],
  vite: {
    esbuild: {
      jsx: "transform",
      jsxFactory: "m",
      jsxFragment: "'['",
    }
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Dancing Script",
    cssVariable: "--font-DancingScript"
  }]
});
