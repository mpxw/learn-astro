// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';

import expressiveCode from 'astro-expressive-code';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: "https://mpxw.github.io",
    base: "/learn-astro",
    output: 'static',
    adapter: deno(),
    trailingSlash: "never",
    markdown: {
        shikiConfig: {
            theme: 'github-light',
            // light: 'github-light',
            // dark: 'github-dark',
        }
    },

    integrations: [expressiveCode(), icon()]
});