// @ts-check
import { defineConfig } from 'astro/config';
import mithril from '@pioleong/astro-mithril'


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
  }
});
