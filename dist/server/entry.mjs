import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D_4yYvz3.mjs';
import { manifest } from './manifest_sq5glnAL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/posts/post-1.astro.mjs');
const _page3 = () => import('./pages/posts/post-2.astro.mjs');
const _page4 = () => import('./pages/posts/post-3.astro.mjs');
const _page5 = () => import('./pages/posts/post-4.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/tags.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/blog.astro", _page1],
    ["src/pages/posts/post-1.md", _page2],
    ["src/pages/posts/post-2.md", _page3],
    ["src/pages/posts/post-3.md", _page4],
    ["src/pages/posts/post-4.md", _page5],
    ["src/pages/rss.xml.ts", _page6],
    ["src/pages/tags/[tag].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "relativeClientPath": "..\\..\\client/"
};
const _exports = createExports(_manifest, _args);
const stop = _exports['stop'];
const handle = _exports['handle'];
const start = _exports['start'];
const running = _exports['running'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handle, pageMap, running, start, stop };
